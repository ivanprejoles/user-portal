'use client'

import 'react-dropzone-uploader/dist/styles.css';
import Dropzone, { IDropzoneProps } from 'react-dropzone-uploader'

import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage'

import { X } from "lucide-react"
import Image from "next/image" 

interface FileUploadProps {
    onChange: (url?: string) => void,
    value: string,
    onFileChange: (file: File) => void
}

export const ImageUpload = ({
    onChange,
    value,
    onFileChange
}: FileUploadProps) => {
    const fileType = value?.split('.').pop()
    
    const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta , file}, status) => {
        if (status ==='done') {
            onChange(meta.previewUrl)
            onFileChange(file)
            console.log(file)
        }
    }
    
    
    if (value && fileType !== 'pdf') {
        return(
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"
                />
                <button
                    onClick={() => onChange('')}
                    type="button"
                    className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                >
                    <X className="h-4 w-4"/>
                </button>
            </div>
        )
    }
    
    return (

        <Dropzone   
        
            autoUpload={true}
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            inputContent="Drop an Image"
            styles={{
                dropzone: {
                    minWidth: 200,
                    maxWidth: 300
                },
                dropzoneActive: { borderColor: 'green' },
            }}
            minSizeBytes={0}
            maxSizeBytes={3097152}
            accept="image/*"
            submitButtonDisabled={files => (files.length !== 1)}
        />
    )
}