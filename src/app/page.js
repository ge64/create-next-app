import MyComponent from '@/components/MyFirstComponent.js';
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div id='body-text'>
                <br></br>
                Welcome to Next.js!
                <MyComponent />
                <br></br>
                <p>I'm already out of ideas!</p>
            </div>
        </div>
    )
}

