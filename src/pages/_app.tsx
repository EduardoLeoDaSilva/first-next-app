import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from '../../assets/Logo.svg'
import homeImage from '../../assets/Home.png'
import { Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { OrderContextProvider } from "../contexts/order-context";
globalStyles();


function MyApp({ Component, pageProps }: AppProps) {

    return (
        <Container>
            <Header>

                <Image alt="" src={logo} />
            </Header>
            <OrderContextProvider>
                <Component {...pageProps} />
            </OrderContextProvider>
        </Container>
    )
}

export default MyApp