"use client"
import Image from 'next/image'
import { Fragment } from 'react'
import { CarDetailsProps } from '@/types'

import { Dialog, Transition } from '@headlessui/react';

const CardDetails = (
    {isOpen,closeModal,car} : CarDetailsProps) => {
  return (
    <>
        <Transition 
            appear 
            show={isOpen} 
            as={Fragment}>
                <Dialog 
                    as="div"
                    className="relative z-10"
                    onClose={closeModal}
                    >
                      <Transition.Child>
                            <div 
                                className='fixed inset-0 bg-black bg-opacity-25'>

                            </div>
                      </Transition.Child>      
                </Dialog>
        </Transition>
    </>
  )
}

export default CardDetails
