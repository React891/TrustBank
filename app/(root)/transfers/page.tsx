import TransferTable from '@/components/transfer/TransfersTable'
import Title from '@/components/shared/Title'
import Framer from '@/lib/Framer'
import React from 'react'

export default function page() {
    return (
        <Framer>
            <div className="">
                <Title title='Transfers' />
                <TransferTable />
            </div>
        </Framer>

    )
}
