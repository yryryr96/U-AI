import Image from "next/image";
import { useRouter } from 'next/navigation'

const TutorialButton = () => {
    const router = useRouter();

    const onClick = () => {
        router.push('/tutorial');
    }
    return (
        <button
        onClick={onClick}
        
        style = {{
            position: 'fixed',
            right: '8%',
            top: '3.5%',
            width: '90px',
            height: '90px',
            background: 'none',
            border: 'none',
            zIndex: '5',
            cursor : 'pointer'
        }}>
            <div style={{width:'100%', height:'100%'}}>
                <Image src={'/resources/storyButton/questionbutton.png'} layout='fill' objectFit='cover' alt="" /> 
            </div>
        </button>
    )
}

export default TutorialButton;