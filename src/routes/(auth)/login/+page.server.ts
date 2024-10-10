import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import axios from "axios";

const login: Action = async ({ cookies, request }) => {
    const data = await request.formData();

    await axios
        .post("http://localhost:3000/users/login", data, {
            headers: {
                "Content-Type": `application/json`,
            },
        })
        .then((response) => {
            cookies.set("session", response.data.data.user.user_token, {
                path: "/",
                httpOnly: true,
                sameSite: "strict",
                secure: false,
                maxAge: 60 * 60 * 24 * 30,
            });
            redirect(302, "/");
        });
};

export const actions: Actions = { login };
