// user save to the database
export const savedUser = (user) => {
    const currantUser = {
        email: user.email
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: "PUT",
        headers: {
            content_type: "application/json"
        },
        body: JSON.stringify(currantUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}