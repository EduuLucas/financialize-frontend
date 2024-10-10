import { redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import axios from "axios";

export const load: PageServerLoad = async () => {
    // todo
};

const register: Action = async ({ request }) => {
    const data = await request.formData();

    await axios
        .post("http://localhost:3000/users", data, {
            headers: {
                "Content-Type": `application/json`,
            },
        })
        .then(() => {
            redirect(303, "/login");
        });
};

export const actions: Actions = { register };
