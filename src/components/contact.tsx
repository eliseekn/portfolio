import { IProps } from "../interfaces/iprops"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface IData {
    name: string,
    email: string,
    subject: string,
    message: string,
    timestamp: string
}

export default function Contact({ activePage, setActivePage }: IProps) {
    const [formData, setFormData] = useState<IData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        timestamp: new Date().toUTCString()
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const submitContactForm = () => {
        setIsLoading(true)

        const timestamp: string = new Date().toUTCString()

        setFormData({ ...formData, timestamp: timestamp })
        
        fetch('https://sheet.best/api/sheets/b0e5f88f-386b-43a3-85f8-dc194a89262f', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                setIsLoading(false)

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    timestamp: new Date().toUTCString()
                })

                alert('Votre message a bien été envoyé. Vous serez recontactez dans les plus brefs délais.')
            })
    } 

    return (
        <div className="flex items-center min-h-screen">
            <div className="grid grid-cols-2 gap-3">
                <div className="col-span-6 md:col-auto text-center order-2 md:text-left mt-5 md:mt-0 px-0 md:px-10">
                    <p className="text-base md:text-xl md:leading-loose">
                        Vous pouvez aussi me contacter par téléphone au <span className="text-[#7e97a6] font-semibold mr-2">(+225) 0759434291/0143403398</span> et me  
                        retrouver sur <a href="https://linkedin.com/in/eliseekn" target="_blank" rel="nofollow noreferrer noopener" className="text-[#7e97a6] font-semibold">LinkedIn</a> et 
                        <a href="https://github.com/eliseekn" target="_blank" rel="nofollow noreferrer noopener" className="text-[#7e97a6] font-semibold ml-2">Github</a>.
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start mt-10">
                        <button className="text-base md:text-xl md:leading-loose font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => setActivePage('Work')} title="Retour">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                    </div>
                </div>

                <div className="col-span-6 md:col-auto order-1">
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" id="name" className="text-base border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" placeholder="Nom et prénom(s)" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        <input type="email" id="email" className="text-base border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" placeholder="Adresse email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                        <input type="text" id="subject" className="text-base my-3 col-span-full border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" placeholder="Objet" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                        <textarea id="message" placeholder="Message" className="text-base col-span-full border bg-transparent px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-[#7e97a6] focus:outline-0 transition ease-in-out duration-500" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                    
                        <button type="button" className="text-base md:text-xl md:leading-loose col-span-full font-semibold bg-transparent text-[#7e97a6] border-2 border-[#7e97a6] hover:bg-[#7e97a6] hover:text-white px-4 py-2 rounded-lg transition-all duration-500" onClick={() => submitContactForm()}>
                            {isLoading && 'Opération en cours...'}
                            {!isLoading && 'Envoyer'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
