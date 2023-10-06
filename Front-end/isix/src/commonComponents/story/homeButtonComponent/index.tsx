import Image from "next/image";
import { useRouter } from 'next/navigation'

const HomeButton = () => {
    const router = useRouter();

    const onClick = () => {
        router.push('/main');
    }
    return (
        <button
        onClick={onClick}
        
        style = {{
            position: 'fixed',
            left: '1%',
            top: '3%',
            width: '90px',
            height: '90px',
            background: 'none',
            border: 'none',
            zIndex: '5',
            cursor : 'pointer'
        }}>
            <div style={{width:'100%', height:'100%'}}>
                <Image src={'/resources/storyButton/homebutton.png'} layout='fill' objectFit='cover' alt="" /> 
            </div>
        </button>
    )
}

export default HomeButton;