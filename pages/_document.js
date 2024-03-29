import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <title>Ingeniera de Software II</title>
                    <meta name='descripcion' content='Ryan Ray Porfolio WebSite'></meta>
                    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                
            </Html>
            
        )
    }
}
export default MyDocument;
