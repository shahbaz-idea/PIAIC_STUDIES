function make_sandwich(items: string[]): void {
    console.log(`You have ordered a sandwich with the following items: ${items.join(", ")}.`);
}

make_sandwich(["lettuce", "tomato", "mayonnaise"]);
make_sandwich(["turkey", "cheese", "lettuce", "mayonnaise", "mustard"]);
make_sandwich(["peanut butter", "jelly"]);
