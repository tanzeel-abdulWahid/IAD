import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../../components/CustomButton'
import styles from '../../../style'

const BankDetailsTab = () => {
    return (
        <div>
            <h1 className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}>Bank Information</h1>
            <h1 className='text-sm text-gray-500 mt-3 text-center md:text-left mb-8 md:pl-10 lg:pl-0'>Add your new bank Information or edit</h1>
            <Divider className='border-lightGray' />

            <Link to="/addBank" className='inline-flex'>
                <CustomButton text="Add new account" />

            </Link>
            <div className='mt-4'>
                <h1 className={`${styles.boldText} text-lightGreen text-2xl`}>Bank Name</h1>
                <h1 className="text-2xl font-thin text-gray-700 mt-2">Janata Bank Limited	</h1>
            </div>


            <div className='mt-4'>
                <h1 className={`${styles.boldText} text-lightGreen text-2xl`}>Account Number</h1>
                <h1 className="text-2xl font-thin text-gray-700 mt-2">97029169	</h1>
            </div>


            <div className='mt-4'>
                <h1 className={`${styles.boldText}  text-lightGreen text-2xl`}>Iban Number</h1>
                <h1 className="text-2xl font-thin text-gray-700 mt-2">NL03ABNA9897151745</h1>
            </div>
            <div className='flex lg:inline-flex gap-x-5 mt-4'>
                <Link to={"/addBank"}> 
                    <CustomButton text="Edit Account Details" type="button" />
                </Link>
                <div>
                    <CustomButton text="Delete Account" type="button" />
                </div>
            </div>
        </div>
    )
}

export default BankDetailsTab