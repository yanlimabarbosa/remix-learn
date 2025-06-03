import { useFetcher } from "react-router";
import type { Route } from "./+types/login";
import { Spin } from "~/components/spin";



export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    console.log("email", email)
    console.log("password", password)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return {
        ok: true,
    }
}

export default function Login({ actionData }: Readonly<Route.ComponentProps>) {
    console.log("actionData", actionData)

    const fetcher = useFetcher()
    const busy = fetcher.state !== "idle"

    console.log("FETCHER", fetcher)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                            <p className="text-gray-600">Sign in to your account to continue</p>
                        </div>

                        <fetcher.Form className="space-y-6" method="POST">
                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value="yan@gmail.com"
                                    readOnly
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value="yan"
                                    readOnly
                                    required
                                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-gray-900"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div>
                                <button
                                    disabled={busy}
                                    type="submit"
                                    className="disabled:cursor-not-allowed w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 transform hover:-translate-y-0.5"
                                >
                                    {busy ? <Spin /> : "Sign in"}
                                </button>
                            </div>
                        </fetcher.Form>
                    </div>
                </div>
            </div>
        </div>
    );
}