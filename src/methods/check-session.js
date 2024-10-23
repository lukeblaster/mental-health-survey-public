import supabase from "@/api/supabase"

export const checkUserSession = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();

    if(error) {
        return null
    }

    if(session) {
        return session
    } else {
        return null
    }
}