import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { SuccessContainer } from "../styles/pages/success";
import Head from "next/head";

interface Order{
    items:         {
        product: string,
        image: string,
        price: number,
        quant: number
      }[],
      total: number,
      id: number
}

interface SuccessProps{
    order: Order
}


export default function Success({order}: SuccessProps){
    return (
        <>
        <Head>
            <title>Compra efetuada</title>
        </Head>
        <SuccessContainer>
            <div>
                <Image src={order.items[0].image} alt="" height={350} width={350}/>
            </div>
            
            <h1>Compra efetuada!</h1>

            <p>Uhuul <strong>Diego Fernandes</strong>, sua compra de {order.items.length} camisetas já está a caminho da sua casa. </p>

            <Link href={'/'}><div>Voltar para o catálogo</div></Link>
        </SuccessContainer>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async ({query, params}) => {
    const id = query.id;
    console.log("Aquiiiiiiiii")

    if(!id){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const order = await axios.get(`/order/${id}`, {
        baseURL: 'http://localhost:3000'
    })

    console.log(order.data)

    return {
      props:{
         order: order.data
      }
    }
}