import React from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import InputForm from '../components/InputForm'
import DisplayTable from '../components/DisplayTable'

const Dashboard = () => {
    return (
        <DefaultLayout>
            <div className="">
                <div className='container w-50 m-auto'>
                <InputForm />
                </div>
                
                <hr className='py-1 bg-dark' />
                

            </div>

        </DefaultLayout>
    )
}

export default Dashboard
