const Saml = () => {
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
                Contact your admin to get your Organization ID
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
                Continue with SAML SSO
            </div>
        </div>
    )
}

export default Saml
