export default function signUser(firstName, lastName) {
    return new Promise((resolve) => {
        resolve({
            firstName,
            lastName,
        });
    });
}
