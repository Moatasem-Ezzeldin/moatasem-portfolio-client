import Button from '../ui/Button'
import BaseModal from './BaseModal'
import { X } from 'lucide-react'

const ConfirmModal = ({ modal, onClose, isLoading= false, error, isEnglish }) => {

  return (
    <BaseModal isOpen={modal.isOpen} isLoading={isLoading} onClose={onClose}
        className='w-full max-w-md rounded-xl'
    >
        {/* Header (title & close x) */}
        <div className="flex items-center justify-between">
            <h2 className="text-lg text-title font-semibold">{modal.title}</h2>
            <Button
                className='w-8 h-8 rounded-full'
                variant='secondary'
                disabled={isLoading}
                onClick={onClose}
            >
                <X size={14}/>
            </Button>
        </div>
        {/* desc & error */}
        <div className="flex flex-col gap-1.5">
            {/* Body (desc) */}
            <p className="text-subtitle text-sm leading-relaxed">
                {modal.description}
            </p>
            {/* Error server */}
            <p className="min-h-[22.75px] text-red-500 text-sm leading-relaxed">
                {error}
            </p>
        </div>
        {/* Footer (btns peload and cancle) */}
        <div className="flex gap-3 justify-end">
            <Button
                className='h-9 text-sm px-4 rounded-md disabled:opacity-55'
                variant='secondary'
                disabled={isLoading}
                onClick={onClose}
            >
                {isEnglish ? "Cancel" : "إغلاق"}
            </Button>
            <Button
                className='h-9 text-sm px-4 rounded-md'
                variant='destructive'
                disabled={isLoading}
                onClick={modal.onConfirm}
            >
                {isLoading ? "Loading..." : modal.btnText}
            </Button>
        </div>
    </BaseModal>
  )
}

export default ConfirmModal