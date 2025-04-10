'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Auth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter()

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (!isAuthenticated) {
        router.push('/')
      }
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default Auth
