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
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave="ease-out duration-200"
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                      >
                            <div 
                                className='fixed inset-0 bg-black bg-opacity-25'>

                            </div>
                      </Transition.Child>  
                      <div className='fixed inset-0 overflow-y-auto'>
                            <div className='flex min-h-full items-center
                             justify-center p-4 text-center'>

                            </div>
                      </div>    
                </Dialog>
        </Transition>
    </>
  )
}

export default CardDetails
