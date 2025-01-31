import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user);
            localStorage.setItem('user', JSON.stringify(user.user));
            setIsLoggedIn(true);
            navigate('/', { replace: true });
        },
        onError: (err) => {
            console.log('ERROR', err);
            toast.error('O e-mail ou a senha fornecidos estão incorretos');
        },
    });

    return { login, isLoading, isLoggedIn };
}