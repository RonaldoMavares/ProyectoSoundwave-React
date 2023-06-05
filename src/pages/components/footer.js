import '../shared/reset.css';
import '../shared/sharedStyles.css';

export default function FooterPage() {
    return (
            <>
                <footer>
                    <img src="/footer.png" alt="Logo soundwave footer"/>
                    <p className="copyright">&copy; {new Date().getFullYear()} - Copyright SoundWave</p>
                </footer>
            </>
    )
};
