import MicrosoftIcon from '../../assets/icons/microsoft-icon.svg'
import GoogleIcon from '../../assets/icons/google-icon.svg'
import GithubIcon from '../../assets/icons/github-icon.svg'
import Divider from '@mui/material/Divider'

interface LoginButtonProps {
    icon: string
    text: string
}

const Login = () => {
    const LoginButton = ({ icon, text }: LoginButtonProps) => {
        return (
            <div
                style={{
                    display: 'flex',
                    borderRadius: '100px',
                    border: '1px solid #EBEBEB',
                    backgroundColor: '#FFFFFF',
                    padding: '9.5px, 24px, 9.5px, 24px',
                    width: 327,
                    height: 40,
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                }}
                onClick={() => console.log(`${text} button clicked`)}
            >
                <img src={icon} style={{ height: 16, width: 16 }} />
                <div
                    style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: '#152023',
                        marginLeft: 8,
                    }}
                >
                    {text}
                </div>
            </div>
        )
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                marginLeft: -200,
                flexDirection: 'column',
                gap: 12,
                fontFamily: 'Titillium Web',
            }}
        >
            <div
                style={{
                    fontWeight: 600,
                    fontSize: 24,
                    color: '#152023',
                    marginBottom: 30,
                }}
            >
                Create your free account
            </div>
            <LoginButton icon={MicrosoftIcon} text="Sign in with Microsoft" />
            <LoginButton icon={GoogleIcon} text="Sign in with Google" />
            <LoginButton icon={GithubIcon} text="Sign in with GitHub" />

            <div
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    width: 327,
                    marginTop: 10,
                    marginBottom: 10,
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: '18px',
                    color: '#767676',
                    textAlign: 'center',
                }}
            >
                By clicking continue, you agree to our
                <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#152023', textDecoration: 'none' }}
                >
                    {' '}
                    Terms of Service{' '}
                </a>
                and
                <a
                    href="/policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#152023', textDecoration: 'none' }}
                >
                    {' '}
                    Privacy Policy{' '}
                </a>
            </div>

            <div
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 10,
                    width: 327,
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#767676',
                }}
            >
                <Divider> or continue with</Divider>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    gap: 10,
                    width: 327,
                    marginTop: 15,
                    height: 40,
                    backgroundColor: '#152023',
                    borderRadius: 100,
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#FFFFFF',
                }}
                onClick={() => console.log('SAML SSO button clicked')}
            >
                SAML SSO
            </div>
        </div>
    )
}

export default Login
