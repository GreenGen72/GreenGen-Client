import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";

function Footer() {
    return (
        <>
            <div className="bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Green Gen 72 | © {new Date().getFullYear()}</p>
                    <p className='text-lg'>Acesse nossas redes sociais:</p>
                    <div className='flex gap-2'>

                        <a href="https://www.instagram.com/greengen_72?igsh=MTdjNDU1Z2hkd2libg==" target="_blank" rel="noopener noreferrer">
                            <InstagramLogo size={48} weight='bold' alt="Instagram" />
                        </a>

                        <a href="https://github.com/GreenGen72" target="_blank" rel="noopener noreferrer">
                            <GithubLogo size={48} weight='bold' alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Footer;
