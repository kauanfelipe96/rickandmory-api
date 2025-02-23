import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get("email");
        const senha = data.get("senha");

        if (!email || !senha) {
            setError("Preencha todos os campos!");
            return;
        }

        if (!isValidEmail(email)) {
            setError("Digite um e-mail válido!");
            return;
        }

        setError("");

        console.log({ email, senha });
        navigate("/home");
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                {error && (
                    <Alert
                        severity="error"
                        sx={{
                            position: "fixed",
                            top: 20,
                            right: 20,
                            zIndex: 1000
                        }}
                    >
                        {error}
                    </Alert>
                )}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        type="email"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        autoComplete="current-password"
                    />
                    <Link href="/novaconta" variant="body2" sx={{ mt: 3 }}>
                        Novo por aqui? Crie uma conta
                    </Link>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Entrar
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
