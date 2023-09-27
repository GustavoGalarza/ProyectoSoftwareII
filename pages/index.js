import Link from "next/link";
import Layout from "../components/Layout";
import { getSession, signOut } from "next-auth/react"


function HomePage({session}) {
  
  return (
    <Layout>
    <div>
      {
        session ? (

          <div>
            <h1>{session.user.name}</h1>
            <p>{session.user.email}</p>
            <img src={session.user.image} alt='' />
          </div>
        ) : (
          <p>Skeleton</p>
        )
      }
      <button  onClick={()=>signOut()}>
       logout
      </button>
    </div>
    </Layout>
  )
}
export const getServerSideProps =async(context) =>{
  const session= await getSession(context)
  if (!session) return{
    redirect: {
      destination: '/login',
      permanent: false
    }
  } 
  return{
    props:{
      session
    }
  }
}

export default HomePage