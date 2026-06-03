// if API updates, then we have to update this
// ideally, fetch this from the API and use this to build a versions dynamically
export const LANGUAGES_VERSIONS = {
    python: "3.10.0",
    "c++": "10.2.0",
    php: "8.2.3",
    java: "15.0.2",
};

export const CODE_SNIPPETS =
{
    python: `print("Hello, World!")`,
    "c++": `#include <iostream>\n
using namespace std;\n
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    php: `<?php
echo "Hello, World!";
    `,
    java: `public class Main {\n
public static void main(String[] args) {
System.out.println("Hello, World!");
}}`,
}