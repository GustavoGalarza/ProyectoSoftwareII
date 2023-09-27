import Layout from '../components/Layout'

const _error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode?(
                    <p className="text-center">Could not load your page, so sorry!</p>
                ): (
                    <p>Cound not this page</p>
                )
            }
         
        </Layout>
    )  
}
export default _error