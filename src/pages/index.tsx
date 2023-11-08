import Image from "next/image";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";
import img1 from '../../assets/Type6.png'
import img2 from '../../assets/Type7.png'
import img3 from '../../assets/Type8.png'
import img4 from '../../assets/Type9.png'
import { useKeenSlider } from 'keen-slider/react'
import { resolve } from "path";
import { GetServerSideProps, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { api } from "../api/mkt-api";
import Link from "next/link";
import { ProductModel } from "../models/product";
import Head from "next/head";



export default function Home(props: any) {


     const [sliderRef] = useKeenSlider()


     return (
          <>
               <Head>
                    <title>Home</title>
               </Head>
               <HomeContainer ref={sliderRef} className="keen-slider">

                    {
                         props.products?.map((prod: ProductModel) => {
                              return (
                                   <Link key={prod.id} href={`/product/${prod.id}`}>
                                        <Product className="keen-slider__slide">
                                             <Image width={520} height={520} src={prod.image} alt="" />
                                             <div>
                                                  <strong>{prod.name}</strong>
                                                  <span>{prod.price}</span>
                                             </div>
                                        </Product>
                                   </Link>
                              );
                         })
                    }

               </HomeContainer>
          </>

     );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//      async function getProductsFromApi() {
//           const result = await api.get<Product[]>('product');
//           if (result.status >= 200) {
//                return result.data;
//           }
//           return [];
//      }
//      const result = await getProductsFromApi();

//      return {
//           props: {
//                products: result
//           }
//      }
// }

export const getStaticProps: GetStaticProps = async () => {
     async function getProductsFromApi() {
          const result = await api.get<ProductModel[]>('product');
          if (result.status >= 200) {
               return result.data;
          }
          return [];
     }
     const result = await getProductsFromApi();

     return {
          props: {
               products: result.map((x) => {
                    return {
                         id: x.id,
                         name: x.name,
                         price: Intl.NumberFormat('pt-BR', {
                              currency: 'BRL',
                              style: 'currency'
                         }).format(x.price),
                         image: x.image
                    }
               })
          },
          revalidate: 10
     }
}
