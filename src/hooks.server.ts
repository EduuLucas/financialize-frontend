import axios from "axios";

function redirect(location: string) {
    return new Response(undefined, {
        status: 303,
        headers: { location },
    });
}

export const handle = async ({ event, resolve }) => {
    const session = event.cookies.get("session");

    if (!session) {
        if (event.url.pathname != "/register" && event.url.pathname != "/login") {
            return redirect("/login");
        }

        return await resolve(event);
    }

    const user = await axios
        .get(`http://localhost:3000/users?user_token=${session}`)
        .then((response) => {
            return response.data.data.user;
        });

    if (user) {
        event.locals.user = user;
    }

    return await resolve(event);
};
