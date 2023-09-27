import Layout2 from '@/components/Layaout2';
import Link from 'next/link'

const custom404 = () => (
    <Layout2>
        <center><img src="giphy.gif" alt="" className="img-fluid  "style={{ maxWidth: '300px' }}/></center>
        <center><p>Esta pagina no existe papu vuelve a 
            <Link legacyBehavior href="/">
                <a> Home</a>
            </Link>
        </p></center>
    </Layout2>
)
export default custom404;