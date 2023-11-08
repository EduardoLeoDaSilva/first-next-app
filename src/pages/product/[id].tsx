import { DescriptionContainer, HeaderContainer, ImageContainer, ProductContainer } from "@/src/styles/pages/product";
import Image from "next/image";
import { useRouter } from "next/router";
import img from '../../../assets/Type6.png'
import { useContext, useEffect, useState } from "react";
import { api } from "@/src/api/mkt-api";
import { ProductModel } from "@/src/models/product";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useForm } from "react-hook-form";
import { orderContext } from "@/src/contexts/order-context";
import axios from "axios";
import Head from "next/head";

interface ProductProps {
    product: ProductModel
}

export default function Product({ product }: ProductProps) {
    const { isFallback } = useRouter();
    if (isFallback) {
        return (
            <p>Loading</p>
        );
    }
    const { addCartItem, cart } = useContext(orderContext)
    const router = useRouter();
    async function handleAddClick() {
        addCartItem(product);



    }

    useEffect(() => {
        if (cart.items.length > 0) {

            axios.post('/order', {
                items: cart.items.map(x => { return { product: x.product.name, image: x.product.image, price: x.product.price, quant: x.quant } }),
                total: cart.total
            }, {
                baseURL: 'http://localhost:3000'
            }).then((res) => {
                let result = res.data;

                router.push(`/success?id=${result.id}`)
            })

        }
    }, [cart])


    return (
        <>
         <Head>
            <title>{product.name}</title>
         </Head>
            <ProductContainer>
                <ImageContainer>
                    {
                        product?.image ?
                            <Image src={product?.image ?? ""} width={520} height={480} alt="" /> :
                            <div></div>
                    }
                </ImageContainer>

                <HeaderContainer>
                    <h1>{product.name}</h1>
                    <span>R$ {product.price}</span>
                </HeaderContainer>

                <DescriptionContainer>
                    <p>
                        {product.description}
                    </p>

                    <button onClick={handleAddClick}>Comprar</button>
                </DescriptionContainer>

            </ProductContainer>
        </>
    );
}

// export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({ params }) => {
//     const productId = params?.id;
//     const result = await api.get<ProductModel>(`product/${productId}`);

//     return {
//         props: {
//             product: result.data
//         }
//     }
// }

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            {
                params: { id: '1' }

            }
        ],
        fallback: 'blocking',
    }

}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params?.id;
    const result = await api.get<ProductModel>(`product/${productId}`);

    return {
        props: {
            product: result.data
        }
    }
}