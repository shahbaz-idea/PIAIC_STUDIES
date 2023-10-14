function make_shirt(size: string = "large", message: string = "I love my country!"): void {
    console.log(`You have ordered a ${size} shirt with the message "${message}" printed on it.`);
}

make_shirt();
make_shirt("medium");
make_shirt("small", "My Country is great!");

export {};