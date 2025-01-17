import { create } from "zustand";

export const useSite = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  createUser: async (newUser) => {
    if (!newUser.email) {
      return {success:false, message:"Please fill in email!"};
    }

    const res = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(newUser)
    })
    const data = await res.json;
    set((state) => ({users: [...state.users, data.data] }));
    return {success:true, message:"Created user successfully!"};
  }
}));