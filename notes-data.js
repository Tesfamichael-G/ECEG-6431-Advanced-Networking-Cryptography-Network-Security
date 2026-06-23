const modulesData = {
    1: {
        title: "Introduction to Socket Programming",
        mcq: [
            { question: "Which type of socket provides reliable, connection‑oriented communication?", options: ["UDP socket", "TCP socket", "Raw socket", "Datagram socket"], correct: 1, explanation: "TCP sockets use the TCP protocol, which is connection‑oriented and reliable." },
            { question: "In the client‑server model, which component actively initiates a connection?", options: ["Server", "Client", "Router", "Gateway"], correct: 1, explanation: "The client initiates a connection to a server that is listening." },
            { question: "What is the main purpose of a port number?", options: ["To identify a specific process or service on a host", "To encrypt network traffic", "To measure bandwidth", "To assign an IP address"], correct: 0, explanation: "A port number uniquely identifies an application/service on a host." },
            { question: "Which function does a TCP server call to prepare to accept connections?", options: ["connect()", "send()", "bind() and listen()", "accept()"], correct: 2, explanation: "The server must bind to a port and then listen for incoming connections." },
            { question: "What does the accept() function return?", options: ["A file descriptor", "A new socket for the client connection", "The server's IP address", "A status code"], correct: 1, explanation: "accept() returns a new socket that is used to communicate with the client." },
            { question: "Byte ordering in network communication is standardized to:", options: ["Little‑endian", "Big‑endian (network byte order)", "Host‑specific", "Mixed endian"], correct: 1, explanation: "Network byte order is big‑endian; functions like htons() convert host to network order." },
            { question: "Which of the following is a valid IPv4 address in dotted‑decimal notation?", options: ["256.1.1.1", "192.168.0.256", "10.0.0.1", "00.00.00.00.00"], correct: 2, explanation: "IPv4 addresses consist of four octets, each 0‑255." },
            { question: "A socket is uniquely identified by a combination of:", options: ["IP address only", "Port number only", "Protocol + IP address + port number", "MAC address + port"], correct: 2, explanation: "The tuple (protocol, local IP, local port) identifies a socket endpoint." },
            { question: "In TCP, the sequence of function calls on the client side is typically:", options: ["socket() → bind() → listen() → accept()", "socket() → connect() → send()/recv() → close()", "socket() → bind() → connect() → send()", "connect() → socket() → send()"], correct: 1, explanation: "The client creates a socket, connects to the server, then exchanges data." },
            { question: "Which flag is commonly used to indicate a graceful TCP connection termination?", options: ["SYN", "ACK", "FIN", "RST"], correct: 2, explanation: "The FIN flag is set to close a connection gracefully." },
            { question: "What does the htons() function do?", options: ["Converts an integer from host byte order to network byte order (short)", "Converts a string to network address", "Encrypts a packet", "Measures round‑trip time"], correct: 0, explanation: "htons (host to network short) converts 16‑bit values to big‑endian." },
            { question: "Which protocol is best suited for real‑time video streaming where occasional packet loss is acceptable?", options: ["TCP", "UDP", "ICMP", "ARP"], correct: 1, explanation: "UDP is connectionless and has lower overhead, making it suitable for real‑time media." },
            { question: "In a typical TCP handshake, how many packets are exchanged before data transfer begins?", options: ["1", "2", "3", "4"], correct: 2, explanation: "The TCP three‑way handshake (SYN, SYN‑ACK, ACK) establishes a connection." },
            { question: "A server that can handle multiple clients simultaneously is called:", options: ["Concurrent server", "Iterative server", "Stateless server", "Proxy server"], correct: 0, explanation: "A concurrent server uses multiple threads or processes to serve several clients at once." }
        ],
        codePrediction: [
            {
                code: `// Pseudo‑code for a TCP client socket
int sock = socket(AF_INET, SOCK_STREAM, 0);
struct sockaddr_in server;
server.sin_family = AF_INET;
server.sin_port = htons(80);
inet_pton(AF_INET, "192.168.1.1", &server.sin_addr);
connect(sock, (struct sockaddr*)&server, sizeof(server));
// After this, what is the state of the socket?`, correctOutput: "Connected"
            },
            {
                code: `// What value will htons(0x1234) return on a little‑endian machine?
// (Assume 16‑bit conversion)`, correctOutput: "0x3412"
            },
            { code: `// Pseudo‑code: a server calls listen(fd, 5). What does the 5 represent?`, correctOutput: "Maximum pending connections in the queue" },
            { code: `// A TCP segment with SYN and ACK flags set is commonly called?`, correctOutput: "SYN-ACK" },
            { code: `// The combination of IP address and port number uniquely identifies a _____ on the network.`, correctOutput: "socket" },
            { code: `// If a client sends "HELLO" and the server reads 5 bytes, what does recv() return?`, correctOutput: "5" },
            { code: `// In a byte‑stream protocol, data is delivered in a continuous stream without ______ boundaries.`, correctOutput: "message" }
        ],
        fillInBlank: [
            { sentence: "A socket is an endpoint for communication, consisting of an IP address and a _________ number.", answer: "port" },
            { sentence: "The function used to convert an IP address from text to binary form is _________ (e.g., inet_pton).", answer: "inet_pton" },
            { sentence: "TCP stands for Transmission Control _________ .", answer: "Protocol" },
            { sentence: "The three‑way handshake used by TCP involves SYN, SYN‑ACK, and _________ .", answer: "ACK" },
            { sentence: "A server that handles one client at a time is called an _________ server.", answer: "iterative" },
            { sentence: "The combination of IP address and port number is sometimes called a _________ .", answer: "socket" },
            { sentence: "Big‑endian byte order is also known as _________ byte order.", answer: "network" }
        ]
    },

    2: {
        title: "Developing Networking Skills and Network Management",
        mcq: [
            {
                question: "Which protocol is used to map a domain name to an IP address?",
                options: ["HTTP", "FTP", "DNS", "SNMP"],
                correct: 2,
                explanation: "The Domain Name System (DNS) translates human‑readable domain names into IP addresses."
            },
            {
                question: "What does CIDR stand for?",
                options: ["Classless Inter‑Domain Routing", "Classful Internet Domain Resolution", "Common IP Datagram Routing", "Classless Internet Datagram Resolution"],
                correct: 0,
                explanation: "CIDR (Classless Inter‑Domain Routing) replaced classful addressing for more efficient IP allocation."
            },
            {
                question: "Which tool sends ICMP echo requests to test connectivity?",
                options: ["tracert", "nslookup", "ping", "netstat"],
                correct: 2,
                explanation: "ping uses ICMP echo request/reply messages to verify if a host is reachable."
            },
            {
                question: "How many usable host addresses are in a /24 subnet?",
                options: ["254", "256", "128", "512"],
                correct: 0,
                explanation: "A /24 subnet has 2^(32‑24) = 256 addresses, minus network and broadcast = 254 usable."
            },
            {
                question: "What is the primary purpose of SNMP?",
                options: ["Secure file transfer", "Network device monitoring and management", "Email delivery", "Web page encryption"],
                correct: 1,
                explanation: "The Simple Network Management Protocol (SNMP) is used to manage and monitor network devices."
            },
            {
                question: "Which layer of the FCAPS model handles user billing and resource usage tracking?",
                options: ["Fault", "Configuration", "Accounting", "Performance"],
                correct: 2,
                explanation: "Accounting management tracks resource consumption and billing."
            },
            {
                question: "A firewall that filters packets based on stateful inspection examines:",
                options: ["Only source IP", "Only destination port", "The entire context of the connection", "Only packet headers"],
                correct: 2,
                explanation: "Stateful inspection monitors the state of active connections and makes decisions based on the context."
            },
            {
                question: "What does the netstat command display?",
                options: ["DNS cache", "Active network connections and listening ports", "Routing table only", "Firewall rules"],
                correct: 1,
                explanation: "netstat shows active connections, routing tables, interface statistics, and listening ports."
            },
            {
                question: "Which of the following is a private IP address?",
                options: ["8.8.8.8", "172.15.1.1", "192.168.0.1", "1.1.1.1"],
                correct: 2,
                explanation: "192.168.0.1 falls within the private range 192.168.0.0 – 192.168.255.255."
            },
            {
                question: "What is the role of a default gateway?",
                options: ["To assign IP addresses dynamically", "To forward packets to remote networks", "To resolve domain names", "To act as a firewall"],
                correct: 1,
                explanation: "A default gateway is the router that forwards packets from a local network to external networks."
            },
            {
                question: "Which authentication protocol provides single sign‑on using tickets?",
                options: ["Kerberos", "RADIUS", "TACACS+", "LDAP"],
                correct: 0,
                explanation: "Kerberos uses tickets to allow nodes to prove their identity securely over a non‑secure network."
            },
            {
                question: "What is a major issue with using passwords as the sole authentication method?",
                options: ["They are encrypted by default", "They can be guessed, stolen, or brute‑forced", "They are always transmitted securely", "They never expire"],
                correct: 1,
                explanation: "Passwords are vulnerable to various attacks if not supplemented by other factors."
            },
            {
                question: "In DNS, a record that maps a domain name to an IPv6 address is called:",
                options: ["A record", "MX record", "AAAA record", "CNAME record"],
                correct: 2,
                explanation: "AAAA records store IPv6 addresses, whereas A records store IPv4 addresses."
            },
            {
                question: "Which command displays the path packets take to a destination?",
                options: ["ping", "nslookup", "tracert (or traceroute)", "ipconfig"],
                correct: 2,
                explanation: "tracert/traceroute lists all routers (hops) between source and destination."
            }
        ],
        codePrediction: [
            {
                code: "A subnet mask of 255.255.255.192 corresponds to what CIDR prefix?",
                correctOutput: "/26"
            },
            {
                code: "Given IP 10.0.0.0/8, what is the number of usable host addresses?",
                correctOutput: "16777214"
            },
            {
                code: "The command 'ping 127.0.0.1' tests the ________.",
                correctOutput: "local TCP/IP stack"
            },
            {
                code: "In a DNS query, the record type for an IPv4 address is called an ____ record.",
                correctOutput: "A"
            },
            {
                code: "The default port for DNS is ________.",
                correctOutput: "53"
            },
            {
                code: "SNMP agents send unsolicited messages called ________ to notify a manager of an event.",
                correctOutput: "traps"
            },
            {
                code: "The command 'nslookup www.example.com' returns the ________ of the domain.",
                correctOutput: "IP address"
            }
        ],
        fillInBlank: [
            {
                sentence: "DNS stands for Domain _________ System.",
                answer: "Name"
            },
            {
                sentence: "The tool used to trace the route packets take from source to destination is _________ (Windows) or traceroute (Linux).",
                answer: "tracert"
            },
            {
                sentence: "The management model that divides network management into Fault, Configuration, Accounting, Performance, and Security is called _________.",
                answer: "FCAPS"
            },
            {
                sentence: "A _________ IP address is not routable on the public Internet and is used inside private networks.",
                answer: "private"
            },
            {
                sentence: "SNMP stands for Simple Network _________ Protocol.",
                answer: "Management"
            },
            {
                sentence: "A _________ gateway is the router that connects a local network to external networks.",
                answer: "default"
            },
            {
                sentence: "In access control, _________ authentication verifies a user's identity using what they know (e.g., password).",
                answer: "knowledge-based"
            }
        ]
    },

    3: {
        title: "Number Theory",
        mcq: [
            {
                question: "Two numbers are said to be relatively prime if:",
                options: ["They are both prime", "Their greatest common divisor is 1", "They have no common factors other than 2", "Their least common multiple is 1"],
                correct: 1,
                explanation: "Relatively prime (or coprime) numbers share no common positive factor except 1, i.e., gcd(a,b)=1."
            },
            {
                question: "Which theorem states that if p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p)?",
                options: ["Euler's theorem", "Fermat's little theorem", "Chinese remainder theorem", "Fundamental theorem of arithmetic"],
                correct: 1,
                explanation: "Fermat's little theorem is the basis for many primality tests and cryptographic algorithms."
            },
            {
                question: "What is gcd(56, 98) using the Euclidean algorithm?",
                options: ["7", "14", "28", "2"],
                correct: 1,
                explanation: "98 = 56*1 + 42; 56 = 42*1 + 14; 42 = 14*3 + 0 → gcd = 14."
            },
            {
                question: "In modular arithmetic, 17 mod 5 equals:",
                options: ["1", "2", "3", "0"],
                correct: 1,
                explanation: "17 divided by 5 gives remainder 2."
            },
            {
                question: "Euler's totient function φ(9) is equal to:",
                options: ["6", "3", "9", "4"],
                correct: 0,
                explanation: "Numbers 1,2,4,5,7,8 are coprime to 9, so φ(9)=6."
            },
            {
                question: "Which algorithm is used to test whether a number is prime with high probability?",
                options: ["Euclidean algorithm", "Chinese remainder algorithm", "Miller–Rabin primality test", "Extended Euclidean algorithm"],
                correct: 2,
                explanation: "The Miller–Rabin test is a probabilistic primality test widely used in cryptography."
            },
            {
                question: "The Chinese Remainder Theorem provides a solution for:",
                options: ["Finding primitive roots", "Solving a system of linear congruences with pairwise coprime moduli", "Factoring large integers", "Computing discrete logarithms"],
                correct: 1,
                explanation: "CRT constructs an integer x that satisfies x ≡ a_i (mod m_i) when the m_i are pairwise coprime."
            },
            {
                question: "What is 7^2 mod 5?",
                options: ["4", "2", "1", "0"],
                correct: 0,
                explanation: "7^2=49, 49 mod 5 = 4."
            },
            {
                question: "A primitive root modulo n exists if:",
                options: ["n is any integer", "n is 2, 4, p^k, or 2p^k where p is an odd prime", "n is a prime power only", "n is a prime"],
                correct: 1,
                explanation: "Primitive roots exist only for certain moduli: 2, 4, p^k, and 2p^k (p odd prime)."
            },
            {
                question: "The discrete logarithm problem underlies the security of:",
                options: ["RSA", "Diffie‑Hellman key exchange", "AES", "SHA‑256"],
                correct: 1,
                explanation: "Diffie‑Hellman and ElGamal rely on the difficulty of computing discrete logarithms in finite fields."
            },
            {
                question: "Euler's theorem states that if a and n are coprime, then a^φ(n) ≡ ? (mod n)",
                options: ["0", "1", "a", "n"],
                correct: 1,
                explanation: "a^φ(n) ≡ 1 (mod n) is a generalization of Fermat's little theorem."
            },
            {
                question: "Which of the following is NOT a prime number?",
                options: ["2", "3", "9", "17"],
                correct: 2,
                explanation: "9 = 3×3, so it is composite."
            },
            {
                question: "The extended Euclidean algorithm computes:",
                options: ["Only the gcd", "gcd and coefficients x,y such that ax + by = gcd(a,b)", "Whether a number is prime", "The LCM of two numbers"],
                correct: 1,
                explanation: "Extended Euclid finds integers x and y satisfying Bézout's identity."
            },
            {
                question: "What is the value of φ(p) for a prime p?",
                options: ["p", "p-1", "p+1", "2p"],
                correct: 1,
                explanation: "For a prime p, all integers 1 to p-1 are coprime to p, so φ(p)=p-1."
            }
        ],
        codePrediction: [
            {
                code: "Calculate gcd(252, 105) using the Euclidean algorithm.",
                correctOutput: "21"
            },
            {
                code: "Find 5^3 mod 13.",
                correctOutput: "8"
            },
            {
                code: "Solve: x ≡ 2 (mod 3), x ≡ 3 (mod 5) using CRT. What is x (mod 15)?",
                correctOutput: "8"
            },
            {
                code: "Compute φ(15).",
                correctOutput: "8"
            },
            {
                code: "What is the remainder when 2^10 is divided by 7? (Use modular exponentiation if needed)",
                correctOutput: "2"
            },
            {
                code: "If p=11, which of the following is a primitive root? (Determine one by trial: 2,3,...?) Show that 2 is a primitive root modulo 11 by checking powers.",
                correctOutput: "2"  // 2^1=2,2^2=4,2^3=8,2^4=16=5,2^5=10,2^6=20=9,2^7=18=7,2^8=14=3,2^9=6,2^10=12=1 → order 10, so primitive.
            },
            {
                code: "Use Euler's theorem to compute 7^4 mod 10. (φ(10)=4, 7 and 10 coprime → 7^4 ≡ 1 mod 10)",
                correctOutput: "1"
            }
        ],
        fillInBlank: [
            {
                sentence: "Two numbers a and b are called _________ if gcd(a,b) = 1.",
                answer: "coprime"
            },
            {
                sentence: "The function that counts the number of positive integers less than n that are relatively prime to n is called Euler's _________ function.",
                answer: "totient"
            },
            {
                sentence: "Fermat's little theorem states that if p is prime and a is not divisible by p, then a^(______) ≡ 1 (mod p).",
                answer: "p-1"
            },
            {
                sentence: "The Euclidean algorithm is used to find the greatest common _________ of two integers.",
                answer: "divisor"
            },
            {
                sentence: "In modular arithmetic, the expression a ≡ b (mod m) means that m divides the difference _________ .",
                answer: "a-b"
            },
            {
                sentence: "The Chinese remainder theorem requires that the moduli be pairwise _________.",
                answer: "coprime"
            },
            {
                sentence: "The difficulty of computing discrete _________ in a finite field is the security basis of Diffie‑Hellman key exchange.",
                answer: "logarithms"
            }
        ]
    },

    4: {
        title: "Public Key Cryptography",
        mcq: [
            {
                question: "Who invented the RSA algorithm?",
                options: ["Diffie and Hellman", "Rivest, Shamir and Adleman", "ElGamal", "Miller and Rabin"],
                correct: 1,
                explanation: "RSA is named after its inventors: Ron Rivest, Adi Shamir, and Leonard Adleman."
            },
            {
                question: "In RSA, the public key consists of:",
                options: ["(d, n)", "(e, n)", "(p, q)", "φ(n)"],
                correct: 1,
                explanation: "The public key is the pair (e, n), where e is the public exponent and n the modulus."
            },
            {
                question: "What mathematical problem provides the security of RSA?",
                options: ["Discrete logarithm problem", "Integer factorisation problem", "Elliptic curve discrete log problem", "Quadratic residuosity problem"],
                correct: 1,
                explanation: "RSA's security relies on the difficulty of factoring the large modulus n = p·q."
            },
            {
                question: "Which statement about Diffie‑Hellman key exchange is true?",
                options: ["It encrypts messages directly", "It allows two parties to agree on a shared secret over an insecure channel", "It uses RSA keys", "It does not require any public parameters"],
                correct: 1,
                explanation: "Diffie‑Hellman establishes a shared secret that can be used for symmetric encryption, without transmitting the secret itself."
            },
            {
                question: "In RSA, what is the condition for choosing the public exponent e?",
                options: ["e must be larger than n", "e must be coprime to φ(n)", "e must equal p or q", "e must be a multiple of φ(n)"],
                correct: 1,
                explanation: "e must satisfy 1 < e < φ(n) and gcd(e, φ(n)) = 1."
            },
            {
                question: "What does ECC stand for?",
                options: ["Elliptic Curve Cryptography", "Encrypted Checksum Code", "Euler's Cryptography Cipher", "Extended Cipher Communication"],
                correct: 0,
                explanation: "ECC (Elliptic Curve Cryptography) uses elliptic curves over finite fields for security."
            },
            {
                question: "Which of the following is an advantage of ECC over RSA?",
                options: ["Larger key size for equivalent security", "Smaller key size for equivalent security", "Based on integer factorisation", "No mathematical foundation"],
                correct: 1,
                explanation: "ECC offers the same security with much smaller keys, making it efficient for constrained devices."
            },
            {
                question: "What is the purpose of a digital certificate in public key management?",
                options: ["To encrypt the private key", "To bind a public key to an entity's identity", "To generate random numbers", "To speed up encryption"],
                correct: 1,
                explanation: "A certificate, signed by a trusted Certificate Authority, associates a public key with its owner."
            },
            {
                question: "The Diffie‑Hellman protocol is vulnerable to which type of attack?",
                options: ["Brute force only", "Man‑in‑the‑middle attack", "Side‑channel attack", "Frequency analysis"],
                correct: 1,
                explanation: "Without authentication, an attacker can intercept and replace public values, sharing separate keys with each party."
            },
            {
                question: "What is the recommended minimum RSA key length for security today?",
                options: ["512 bits", "1024 bits", "2048 bits", "4096 bits"],
                correct: 2,
                explanation: "NIST recommends at least 2048‑bit RSA keys; 1024‑bit is considered insecure."
            },
            {
                question: "In ECC, the private key is:",
                options: ["A randomly chosen point on the curve", "A randomly chosen integer", "The curve parameters", "The generator point"],
                correct: 1,
                explanation: "The private key is a scalar (integer), while the public key is that integer multiplied by the base point."
            },
            {
                question: "What does the security of elliptic curve cryptography rely on?",
                options: ["Integer factorisation", "Discrete logarithm problem on elliptic curves", "RSA problem", "Solving linear equations"],
                correct: 1,
                explanation: "ECC security is based on the hardness of the Elliptic Curve Discrete Logarithm Problem (ECDLP)."
            },
            {
                question: "In RSA encryption, the ciphertext c is computed as:",
                options: ["c = m^d mod n", "c = m^e mod n", "c = e^m mod n", "c = n^e mod m"],
                correct: 1,
                explanation: "Encryption: c = m^e mod n; Decryption: m = c^d mod n."
            },
            {
                question: "What is the purpose of key management?",
                options: ["To generate random numbers", "To securely distribute, store, and revoke cryptographic keys", "To encrypt messages only", "To increase the key length"],
                correct: 1,
                explanation: "Key management encompasses the entire lifecycle of cryptographic keys, including generation, distribution, storage, and destruction."
            }
        ],
        codePrediction: [
            {
                code: "In RSA, given p=3, q=11, e=7, compute n and φ(n). What is n?",
                correctOutput: "33"
            },
            {
                code: "Using the same parameters (p=3,q=11,e=7), what is the private key d? (d ≡ e⁻¹ mod φ(n))",
                correctOutput: "3"
            },
            {
                code: "In RSA, encrypt message m=2 with public key (e=7, n=33). What is the ciphertext?",
                correctOutput: "29"
            },
            {
                code: "Decrypt the ciphertext c=29 with private key d=3, n=33. What is the original message?",
                correctOutput: "2"
            },
            {
                code: "In Diffie‑Hellman, common parameters: prime p=23, base g=5. Alice's private a=6, Bob's private b=15. Compute Alice's public A = g^a mod p.",
                correctOutput: "8"
            },
            {
                code: "Compute Bob's public B = g^b mod p (p=23,g=5,b=15).",
                correctOutput: "19"
            },
            {
                code: "Compute the shared secret from Alice's perspective: s = B^a mod p.",
                correctOutput: "2"
            }
        ],
        fillInBlank: [
            {
                sentence: "RSA stands for Rivest–Shamir–_________ .",
                answer: "Adleman"
            },
            {
                sentence: "The security of RSA is based on the difficulty of _________ large integers.",
                answer: "factoring"
            },
            {
                sentence: "In Diffie‑Hellman, the shared secret is computed by both parties without ever being _________ .",
                answer: "transmitted"
            },
            {
                sentence: "Elliptic Curve Cryptography provides equivalent security with much smaller _________ sizes compared to RSA.",
                answer: "key"
            },
            {
                sentence: "A digital certificate binds a public key to an _________ .",
                answer: "identity"
            },
            {
                sentence: "The integer e in RSA must be chosen such that gcd(e, ______) = 1.",
                answer: "φ(n)"
            },
            {
                sentence: "Key management includes generation, distribution, storage, and _________ of keys.",
                answer: "revocation"
            }
        ]
    },

    5: {
        title: "Message Authentication and Hash Functions",
        mcq: [
            {
                question: "What is the primary goal of message authentication?",
                options: ["Confidentiality", "Integrity and origin verification", "Availability", "Key exchange"],
                correct: 1,
                explanation: "Message authentication ensures that a message comes from the alleged source and has not been altered."
            },
            {
                question: "Which of the following is NOT a hash function requirement?",
                options: ["Pre‑image resistance", "Second pre‑image resistance", "Collision resistance", "Reversibility"],
                correct: 3,
                explanation: "A cryptographic hash function must be one‑way (not reversible)."
            },
            {
                question: "A MAC (Message Authentication Code) differs from a hash in that it:",
                options: ["Uses a secret key", "Is always shorter", "Does not compress data", "Uses only public keys"],
                correct: 0,
                explanation: "A MAC is a keyed hash function – it requires a shared secret key."
            },
            {
                question: "Which of the following hash functions is considered broken (collisions found)?",
                options: ["SHA‑256", "SHA‑3", "MD5", "SHA‑512"],
                correct: 2,
                explanation: "MD5 is cryptographically broken and unsuitable for further use."
            },
            {
                question: "HMAC stands for:",
                options: ["Hierarchical Message Authentication Code", "Hash‑based Message Authentication Code", "Highly‑secure Message Authentication Code", "Hashed MAC"],
                correct: 1,
                explanation: "HMAC (Hash‑based Message Authentication Code) uses a hash function and a secret key."
            },
            {
                question: "What is the output size of SHA‑256?",
                options: ["128 bits", "160 bits", "256 bits", "512 bits"],
                correct: 2,
                explanation: "SHA‑256 produces a 256‑bit (32‑byte) hash value."
            },
            {
                question: "Collision resistance means it should be hard to find:",
                options: ["Two different messages with the same hash", "The original message from its hash", "A message whose hash starts with zero", "A key that matches the hash"],
                correct: 0,
                explanation: "Collision resistance: infeasible to find m1 ≠ m2 such that h(m1) = h(m2)."
            },
            {
                question: "Which authentication method provides non‑repudiation?",
                options: ["MAC", "Hash function", "Digital signature", "Password"],
                correct: 2,
                explanation: "Digital signatures provide non‑repudiation because only the signer can create them."
            },
            {
                question: "The avalanche effect in hash functions means:",
                options: ["Output bits change unpredictably when input changes slightly", "Hash collisions are frequent", "The hash always starts with 1", "The function runs very fast"],
                correct: 0,
                explanation: "A small input change should cause about half the output bits to flip."
            },
            {
                question: "Which of the following is a keyed hash used for message authentication?",
                options: ["SHA‑3", "HMAC‑SHA256", "MD5", "Bcrypt"],
                correct: 1,
                explanation: "HMAC is a construction that turns a hash function into a MAC using a secret key."
            },
            {
                question: "What is the recommended way to store passwords?",
                options: ["Plaintext", "Symmetric encryption", "Hashing with a strong, salted algorithm like bcrypt or Argon2", "Using a simple MD5 hash"],
                correct: 2,
                explanation: "Passwords should be salted and hashed with computationally expensive functions to resist brute‑force."
            },
            {
                question: "Which of the following is an authentication protocol that uses a nonce to prevent replay?",
                options: ["Basic HTTP", "CHAP", "FTP", "SNMP"],
                correct: 1,
                explanation: "CHAP (Challenge‑Handshake Authentication Protocol) uses a random challenge to thwart replay attacks."
            },
            {
                question: "The property that it should be infeasible to find any input that hashes to a given output is called:",
                options: ["Pre‑image resistance", "Second pre‑image resistance", "Collision resistance", "Avalanche effect"],
                correct: 0,
                explanation: "Pre‑image resistance: given h, hard to find m such that hash(m)=h."
            },
            {
                question: "Which of the following best describes a replay attack?",
                options: ["An attacker intercepts and resends a valid data transmission", "An attacker guesses a password", "An attacker modifies a message in transit", "An attacker creates a fake server"],
                correct: 0,
                explanation: "Replay attacks involve capturing legitimate traffic and retransmitting it to produce an unauthorized effect."
            }
        ],
        codePrediction: [
            {
                code: "Compute the SHA‑256 hash of the empty string. The hash in hex begins with \"e3b0c4...\". How many bits is this hash?",
                correctOutput: "256"
            },
            {
                code: "If a hash function produces a 128‑bit digest, approximately how many random inputs are needed for a 50% chance of collision (birthday bound)?",
                correctOutput: "2^64"
            },
            {
                code: "Given a MAC, if the attacker cannot compute a valid MAC without the key, the scheme provides: (integrity / confidentiality / availability)",
                correctOutput: "integrity"
            },
            {
                code: "A sender computes HMAC‑SHA256 of a message and appends it. The receiver recalculates the HMAC and compares. This proves the message was not altered and came from the sender, provided the ______ is secret.",
                correctOutput: "key"
            },
            {
                code: "To verify a digital signature, the verifier uses the signer's ________ key.",
                correctOutput: "public"
            },
            {
                code: "A hash function H has collision resistance if it is infeasible to find x ≠ y such that H(x) ___ H(y).",
                correctOutput: "="
            },
            {
                code: "An attacker who sees a valid (message, HMAC) pair cannot forge another pair because HMAC is __________ to the message and key.",
                correctOutput: "bound"  // or "tied" – we'll pick a simple answer: "keyed"
            }
        ],
        fillInBlank: [
            {
                sentence: "A Message Authentication Code is a short piece of information used to authenticate a message and is constructed using a secret _________ .",
                answer: "key"
            },
            {
                sentence: "The property that a hash function should be infeasible to reverse is called _________ resistance.",
                answer: "pre-image"
            },
            {
                sentence: "HMAC stands for _________‑based Message Authentication Code.",
                answer: "Hash"
            },
            {
                sentence: "A _________ attack involves an adversary capturing a valid transmission and resending it later.",
                answer: "replay"
            },
            {
                sentence: "The Secure Hash Algorithm with a 256‑bit output is abbreviated as _________.",
                answer: "SHA-256"
            },
            {
                sentence: "Digital signatures provide authentication, integrity, and _________ (the signer cannot deny signing).",
                answer: "non-repudiation"
            },
            {
                sentence: "A _________ function produces a fixed‑length string from variable‑length input.",
                answer: "hash"
            }
        ]
    },

    6: {
        title: "Digital Signatures & Authentication Protocols",
        mcq: [
            {
                question: "What is the primary purpose of a digital signature?",
                options: ["To encrypt a message", "To verify the sender's identity and message integrity", "To compress data", "To generate symmetric keys"],
                correct: 1,
                explanation: "A digital signature provides authentication, integrity, and non‑repudiation."
            },
            {
                question: "In a digital signature scheme, the signer uses which key to create a signature?",
                options: ["Recipient's public key", "Recipient's private key", "Signer's private key", "Signer's public key"],
                correct: 2,
                explanation: "The signer uses their own private key to generate the signature."
            },
            {
                question: "How does a verifier check a digital signature?",
                options: ["Using the signer's private key", "Using the signer's public key", "Using a shared symmetric key", "By decrypting the message"],
                correct: 1,
                explanation: "The verifier uses the signer's public key to verify the signature."
            },
            {
                question: "Which property distinguishes a digital signature from a MAC?",
                options: ["Confidentiality", "Non‑repudiation", "Speed", "Use of hash functions"],
                correct: 1,
                explanation: "MACs do not provide non‑repudiation because both parties share the same key."
            },
            {
                question: "What is the Digital Signature Algorithm (DSA) based on?",
                options: ["Integer factorisation", "Discrete logarithm problem", "Elliptic curves only", "Symmetric key ciphers"],
                correct: 1,
                explanation: "DSA's security relies on the difficulty of computing discrete logarithms modulo a prime."
            },
            {
                question: "In the RSA signature scheme, signature s for message m (using private key d) is:",
                options: ["s = m^e mod n", "s = m^d mod n", "s = hash(m)^d mod n", "s = hash(m)^e mod n"],
                correct: 2,
                explanation: "RSA signature typically signs the hash of the message: s = (hash(m))^d mod n."
            },
            {
                question: "What is the main advantage of using a hash function before signing a message?",
                options: ["It increases the signature size", "It eliminates the need for a public key", "It reduces the amount of data to sign and prevents certain attacks", "It encrypts the message"],
                correct: 2,
                explanation: "Signing the hash is more efficient and also avoids existential forgery."
            },
            {
                question: "Which authentication protocol uses a trusted third party and tickets?",
                options: ["CHAP", "Kerberos", "RADIUS", "OAuth"],
                correct: 1,
                explanation: "Kerberos relies on a Key Distribution Center (KDC) to grant tickets for services."
            },
            {
                question: "What does X.509 define?",
                options: ["A digital signature algorithm", "A public key certificate format", "A symmetric cipher", "A key exchange protocol"],
                correct: 1,
                explanation: "X.509 is a standard for public key certificates used in TLS/SSL and other applications."
            },
            {
                question: "A replay attack can be prevented in authentication protocols by using:",
                options: ["Larger keys", "Nonces or timestamps", "Longer passwords", "Hash functions only"],
                correct: 1,
                explanation: "Nonces (unique random numbers) or timestamps ensure freshness and prevent replay."
            },
            {
                question: "In the Digital Signature Standard (DSS), the signature consists of:",
                options: ["A single integer", "Two integers (r, s)", "The hash of the message", "The encrypted message"],
                correct: 1,
                explanation: "DSA signatures are composed of two components, r and s."
            },
            {
                question: "What is the purpose of a Certificate Authority (CA)?",
                options: ["To encrypt traffic", "To issue and revoke digital certificates", "To generate symmetric keys", "To perform denial‑of‑service attacks"],
                correct: 1,
                explanation: "A CA is a trusted entity that validates identities and issues digital certificates."
            },
            {
                question: "Which of the following provides strong user authentication without transmitting a password?",
                options: ["Basic authentication", "Digest access authentication", "Password hash comparison", "Plaintext login"],
                correct: 1,
                explanation: "Digest authentication uses challenge‑response and does not send the password in the clear."
            },
            {
                question: "What does non‑repudiation mean in the context of digital signatures?",
                options: ["The signature is encrypted", "The signer cannot deny having signed the message", "The message cannot be read by others", "The signature can be reused"],
                correct: 1,
                explanation: "Non‑repudiation provides proof of origin and integrity, preventing the signer from denying the act."
            }
        ],
        codePrediction: [
            {
                code: "In RSA signature, verify the signature s = 29 on message hash h = 2, with public key (e=7, n=33). Compute s^e mod n.",
                correctOutput: "29"
            },
            {
                code: "If a digital signature verifies correctly, the verifier knows the message came from the owner of the private key and was not ________.",
                correctOutput: "altered"
            },
            {
                code: "A Kerberos ticket has a limited ________ to reduce the window for replay attacks.",
                correctOutput: "lifetime"
            },
            {
                code: "In X.509 certificate chains, the root CA’s certificate is ________‑signed.",
                correctOutput: "self"
            },
            {
                code: "When a CA revokes a certificate, it publishes the certificate’s serial number in a Certificate ________ List (CRL).",
                correctOutput: "Revocation"
            },
            {
                code: "The Digital Signature Algorithm (DSA) was standardised by NIST in the ________ (abbreviation).",
                correctOutput: "DSS"
            },
            {
                code: "An authentication protocol that uses a random number to challenge the claimant is called a ________‑response protocol.",
                correctOutput: "challenge"
            }
        ],
        fillInBlank: [
            {
                sentence: "A digital signature provides authentication, integrity, and _________ .",
                answer: "non-repudiation"
            },
            {
                sentence: "The signer creates a digital signature using their _________ key.",
                answer: "private"
            },
            {
                sentence: "X.509 certificates are issued by a trusted _________ Authority.",
                answer: "Certificate"
            },
            {
                sentence: "Kerberos authenticates users using a trusted third party called the Key _________ Center.",
                answer: "Distribution"
            },
            {
                sentence: "To prevent replay attacks, authentication protocols often include a random number called a _________ .",
                answer: "nonce"
            },
            {
                sentence: "The standard algorithm for digital signatures based on the discrete logarithm problem is _________.",
                answer: "DSA"
            },
            {
                sentence: "Before signing a message, it is common practice to apply a _________ function to the message.",
                answer: "hash"
            }
        ]
    },

    7: {
        title: "Network Security",
        mcq: [
            {
                question: "Which protocol provides encrypted and signed email communication?",
                options: ["HTTPS", "PGP", "SNMP", "DHCP"],
                correct: 1,
                explanation: "Pretty Good Privacy (PGP) offers encryption and digital signatures for emails."
            },
            {
                question: "What does S/MIME stand for?",
                options: ["Secure/Multipurpose Internet Mail Extensions", "Simple Mail Integration", "Secure Mail Interchange", "Standard Mail Encoding"],
                correct: 0,
                explanation: "S/MIME is a standard for public key encryption and signing of MIME data."
            },
            {
                question: "Which IPsec protocol provides encryption and optional authentication of the entire packet?",
                options: ["AH", "ESP", "IKE", "TLS"],
                correct: 1,
                explanation: "Encapsulating Security Payload (ESP) encrypts the payload and can also authenticate it."
            },
            {
                question: "What is the primary purpose of IKE in IPsec?",
                options: ["To encrypt data", "To authenticate users", "To establish a Security Association", "To compress traffic"],
                correct: 2,
                explanation: "Internet Key Exchange (IKE) negotiates security parameters and keys."
            },
            {
                question: "Which transport layer security protocol is the predecessor of TLS?",
                options: ["SSH", "SSL", "HTTPS", "SET"],
                correct: 1,
                explanation: "Secure Sockets Layer (SSL) was developed by Netscape and later evolved into TLS."
            },
            {
                question: "Which port does HTTPS typically use?",
                options: ["80", "443", "22", "25"],
                correct: 1,
                explanation: "HTTPS runs over port 443 by default."
            },
            {
                question: "Classical Kerberos uses which type of cryptography for authentication?",
                options: ["Public key only", "Symmetric key only", "Hybrid", "No cryptography"],
                correct: 1,
                explanation: "Kerberos relies on symmetric key cryptography, with extensions like PKINIT for public key."
            },
            {
                question: "In Kerberos, the KDC consists of:",
                options: ["AS and TGS", "CA and RA", "Web server and database", "Only a Ticket Granting Server"],
                correct: 0,
                explanation: "The Key Distribution Center includes the Authentication Server (AS) and Ticket Granting Server (TGS)."
            },
            {
                question: "X.509 defines a standard for:",
                options: ["Digital certificates", "Symmetric encryption", "Hash functions", "Email encryption"],
                correct: 0,
                explanation: "X.509 specifies the format for public key certificates."
            },
            {
                question: "How does PGP provide confidentiality?",
                options: ["Symmetric encryption only", "Asymmetric encryption only", "A combination of symmetric and asymmetric encryption (hybrid)", "Only hash functions"],
                correct: 2,
                explanation: "PGP encrypts the message with a symmetric session key and encrypts the session key with the recipient's public key."
            },
            {
                question: "Which IPsec mode encrypts the entire original IP packet and adds a new IP header?",
                options: ["Transport mode", "Tunnel mode", "Authentication mode", "Payload mode"],
                correct: 1,
                explanation: "Tunnel mode encapsulates the complete IP packet, providing VPN functionality."
            },
            {
                question: "In IPsec, a Security Association (SA) is:",
                options: ["A unidirectional logical connection defining security parameters", "A digital certificate", "A VPN tunnel", "A firewall rule"],
                correct: 0,
                explanation: "An SA is a one-way relationship that specifies the algorithms and keys to be used."
            },
            {
                question: "What are the core security goals of SSL/TLS?",
                options: ["Confidentiality only", "Integrity only", "Confidentiality, integrity, and authentication", "Availability only"],
                correct: 2,
                explanation: "SSL/TLS provides encryption, message integrity, and server (and optionally client) authentication."
            },
            {
                question: "Which email security protocol is most commonly used in enterprise environments for signing and encryption?",
                options: ["PGP", "S/MIME", "DKIM", "SPF"],
                correct: 1,
                explanation: "S/MIME is widely adopted in organizations for secure email."
            }
        ],
        codePrediction: [
            {
                code: "The default port number for HTTPS is ________.",
                correctOutput: "443"
            },
            {
                code: "What does TLS stand for?",
                correctOutput: "Transport Layer Security"
            },
            {
                code: "In IPsec, the protocol that provides authentication without encryption is _______ (abbreviation).",
                correctOutput: "AH"
            },
            {
                code: "In Kerberos, a service ticket is encrypted with the service's ________ key.",
                correctOutput: "secret"
            },
            {
                code: "PGP uses a ________ encryption scheme to protect the session key.",
                correctOutput: "asymmetric"
            },
            {
                code: "The X.509 certificate contains the subject's public key and is signed by the ________.",
                correctOutput: "Certificate Authority"
            },
            {
                code: "IPsec can operate in transport mode or ________ mode.",
                correctOutput: "tunnel"
            }
        ],
        fillInBlank: [
            {
                sentence: "Kerberos is an authentication protocol that uses a trusted third party called the Key _________ Center.",
                answer: "Distribution"
            },
            {
                sentence: "The Internet Key Exchange protocol is abbreviated as _________.",
                answer: "IKE"
            },
            {
                sentence: "S/MIME provides authentication, message integrity, and non‑repudiation using digital _________.",
                answer: "signatures"
            },
            {
                sentence: "PGP stands for Pretty Good _________.",
                answer: "Privacy"
            },
            {
                sentence: "In SSL/TLS, the ________ handshake establishes the session keys.",
                answer: "handshake"
            },
            {
                sentence: "A Security Association is identified by a Security Parameter Index (SPI), destination address, and security _________.",
                answer: "protocol"
            },
            {
                sentence: "TLS stands for Transport _________ Security.",
                answer: "Layer"
            }
        ]
    },

    8: {
        title: "Wireless Network Security",
        mcq: [
            {
                question: "Which protocol was the original security standard for 802.11 wireless networks but is now considered insecure?",
                options: ["WPA2", "WEP", "WPA3", "802.1X"],
                correct: 1,
                explanation: "Wired Equivalent Privacy (WEP) had severe cryptographic weaknesses and is deprecated."
            },
            {
                question: "What encryption algorithm is used in WPA2?",
                options: ["RC4", "AES (CCMP)", "DES", "3DES"],
                correct: 1,
                explanation: "WPA2 uses AES in CCMP mode for strong confidentiality and integrity."
            },
            {
                question: "Which authentication server is commonly used with WPA2-Enterprise?",
                options: ["DHCP", "RADIUS", "Kerberos", "TACACS+"],
                correct: 1,
                explanation: "WPA2-Enterprise uses a RADIUS server for 802.1X authentication."
            },
            {
                question: "What does WPA3 provide over WPA2?",
                options: ["WEP compatibility", "Protection against offline dictionary attacks (Simultaneous Authentication of Equals)", "Shorter encryption keys", "No encryption"],
                correct: 1,
                explanation: "WPA3 uses SAE to resist brute‑force attacks even with weak passwords."
            },
            {
                question: "In cellular networks, which generation introduced mutual authentication and stronger encryption?",
                options: ["2G", "3G", "4G (LTE)", "1G"],
                correct: 2,
                explanation: "3G introduced mutual authentication and improved encryption, though 4G further enhanced security."
            },
            {
                question: "A rogue access point attack is classified as:",
                options: ["Passive eavesdropping", "Active interception (man-in-the-middle)", "Denial‑of‑service", "Wireless jamming only"],
                correct: 1,
                explanation: "A rogue AP lures clients to connect, enabling interception of traffic."
            },
            {
                question: "What is a major security challenge in mobile ad‑hoc networks (MANETs)?",
                options: ["Centralised authentication", "No fixed infrastructure and dynamic topology", "Static routing tables", "High‑power nodes"],
                correct: 1,
                explanation: "MANETs lack a central authority; nodes act as routers, making them vulnerable to routing attacks."
            },
            {
                question: "Which attack targets sensor networks by depleting battery power?",
                options: ["Sleep deprivation attack", "Sybil attack", "Sinkhole attack", "Wormhole attack"],
                correct: 0,
                explanation: "Sleep deprivation forces nodes to stay awake, draining their limited batteries."
            },
            {
                question: "In the Sybil attack, an adversary:",
                options: ["Jams the frequency", "Creates multiple fake identities to influence the network", "Intercepts all traffic", "Forwards packets to a black hole"],
                correct: 1,
                explanation: "A Sybil attack forges multiple node identities to corrupt routing or data aggregation."
            },
            {
                question: "Which wireless security protocol uses Counter Mode with CBC-MAC Protocol (CCMP)?",
                options: ["WEP", "WPA", "WPA2", "WPA3"],
                correct: 2,
                explanation: "WPA2 introduced CCMP based on AES, replacing TKIP."
            },
            {
                question: "What does IEEE 802.1X provide in a wireless context?",
                options: ["Encryption", "Port‑based network access control", "Frequency hopping", "Quality of Service"],
                correct: 1,
                explanation: "802.1X authenticates devices before granting network access."
            },
            {
                question: "A deauthentication attack on Wi‑Fi aims to:",
                options: ["Steal data", "Disconnect legitimate clients", "Increase signal strength", "Improve encryption"],
                correct: 1,
                explanation: "The attacker sends forged deauth frames to force clients to disconnect."
            },
            {
                question: "Which of the following is a lightweight authentication protocol suitable for sensor networks?",
                options: ["Kerberos", "LEAP", "TLS", "IPsec"],
                correct: 1,
                explanation: "LEAP (Lightweight Extensible Authentication Protocol) was developed for wireless networks, though more modern protocols like EAP‑PSK exist."
            },
            {
                question: "What is the primary purpose of key pre‑distribution in sensor networks?",
                options: ["To establish pair‑wise keys before deployment with limited resources", "To speed up encryption", "To replace all hardware keys", "To broadcast public keys"],
                correct: 0,
                explanation: "Key pre‑distribution schemes store keys in sensors so they can securely communicate after deployment."
            }
        ],
        codePrediction: [
            {
                code: "WEP uses the _________ stream cipher (algorithm name).",
                correctOutput: "RC4"
            },
            {
                code: "WPA3 uses the _________ protocol to resist offline dictionary attacks.",
                correctOutput: "SAE"
            },
            {
                code: "In 802.1X, the authentication server that communicates with the authenticator is typically a _________ server.",
                correctOutput: "RADIUS"
            },
            {
                code: "An attack where an adversary captures WPA2 4‑way handshake packets and later attempts to crack the password is called an ________ attack.",
                correctOutput: "offline dictionary"
            },
            {
                code: "In ad‑hoc networks, a _________ attack attracts packets by advertising a false shortest path.",
                correctOutput: "sinkhole"
            },
            {
                code: "The IEEE standard for port‑based network access control is _________.",
                correctOutput: "802.1X"
            },
            {
                code: "A jamming attack is a type of _________ denial‑of‑service.",
                correctOutput: "physical"
            }
        ],
        fillInBlank: [
            {
                sentence: "WPA stands for Wi‑Fi Protected _________.",
                answer: "Access"
            },
            {
                sentence: "The strongest Wi‑Fi security standard currently is _________ .",
                answer: "WPA3"
            },
            {
                sentence: "A wireless attack where an attacker sets up an unauthorised access point is called a _________ access point.",
                answer: "rogue"
            },
            {
                sentence: "In cellular security, the temporary identifier used instead of the permanent IMSI is called _________.",
                answer: "TMSI"
            },
            {
                sentence: "MANET stands for Mobile _________ Network.",
                answer: "Ad-hoc"
            },
            {
                sentence: "The Sybil attack creates multiple fake _________ .",
                answer: "identities"
            },
            {
                sentence: "Key pre‑distribution schemes are essential for secure communication in _________ networks.",
                answer: "sensor"
            }
        ]
    },

    9: {
        title: "System Security",
        mcq: [
            {
                question: "Which of the following is an example of a passive attack?",
                options: ["Denial of Service", "Traffic analysis", "Malware injection", "Man-in-the-middle"],
                correct: 1,
                explanation: "Passive attacks like traffic analysis monitor the system without altering data."
            },
            {
                question: "What is a Trojan horse?",
                options: ["A self‑replicating program", "A program that disguises itself as legitimate software to deliver a payload", "A type of firewall", "An encryption algorithm"],
                correct: 1,
                explanation: "A Trojan horse appears harmless but performs malicious actions."
            },
            {
                question: "A virus that infects the boot sector of a storage device is called:",
                options: ["Macro virus", "File infector", "Boot sector virus", "Polymorphic virus"],
                correct: 2,
                explanation: "Boot sector viruses target the master boot record or volume boot record."
            },
            {
                question: "What is the primary purpose of a firewall?",
                options: ["To remove viruses", "To prevent unauthorized access to or from a private network", "To encrypt network traffic", "To monitor user activity"],
                correct: 1,
                explanation: "Firewalls enforce a security policy by filtering incoming and outgoing traffic."
            },
            {
                question: "Which type of firewall inspects packets based on the state of active connections?",
                options: ["Packet filter", "Stateful inspection firewall", "Application gateway", "Circuit‑level gateway"],
                correct: 1,
                explanation: "Stateful firewalls track the state of connections and make decisions based on context."
            },
            {
                question: "An intrusion detection system (IDS) that detects attacks by comparing traffic to a database of known patterns is called:",
                options: ["Anomaly‑based IDS", "Signature‑based IDS", "Honeypot", "Firewall"],
                correct: 1,
                explanation: "Signature‑based IDS uses a predefined set of attack signatures."
            },
            {
                question: "What is ransomware?",
                options: ["Malware that encrypts user files and demands payment for the decryption key", "A virus that deletes files", "Software that steals passwords", "A firewall bypass tool"],
                correct: 0,
                explanation: "Ransomware holds data hostage until a ransom is paid."
            },
            {
                question: "Which type of malicious software can spread without human intervention?",
                options: ["Trojan", "Worm", "Spyware", "Adware"],
                correct: 1,
                explanation: "Worms self‑replicate across networks without user interaction."
            },
            {
                question: "A DMZ (Demilitarized Zone) in network security is:",
                options: ["A secure internal network", "A buffer network that hosts publicly accessible services", "An encrypted tunnel", "A wireless security protocol"],
                correct: 1,
                explanation: "A DMZ isolates public‑facing servers from the internal network."
            },
            {
                question: "What does a honeypot do?",
                options: ["Encrypts traffic", "Lures attackers to study their behavior and gather intelligence", "Prevents all intrusions", "Acts as a firewall"],
                correct: 1,
                explanation: "Honeypots are decoy systems designed to detect and analyze unauthorized access."
            },
            {
                question: "Which of the following is a physical security threat?",
                options: ["Virus", "Social engineering", "Fire", "SQL injection"],
                correct: 2,
                explanation: "Physical threats include natural disasters, fire, theft, etc."
            },
            {
                question: "What is the main advantage of a proxy firewall?",
                options: ["It operates at the network layer only", "It inspects the actual content of application data", "It is stateless", "It does not log connections"],
                correct: 1,
                explanation: "Application‑level proxy firewalls can filter based on application‑specific content."
            },
            {
                question: "Which of the following is NOT a malware category?",
                options: ["Worm", "Virus", "Firewall", "Spyware"],
                correct: 2,
                explanation: "A firewall is a security device, not malware."
            },
            {
                question: "An attack that overwhelms a server with traffic, making it unavailable to legitimate users, is called:",
                options: ["Phishing", "Man‑in‑the‑middle", "Denial of Service (DoS)", "Ransomware"],
                correct: 2,
                explanation: "A DoS attack exhausts resources so the service cannot respond to genuine requests."
            }
        ],
        codePrediction: [
            {
                code: "The function of a firewall that blocks all incoming connections by default unless explicitly allowed is called a _________ policy.",
                correctOutput: "default-deny"
            },
            {
                code: "A malware that replicates itself and spreads across networks without user action is a _________ .",
                correctOutput: "worm"
            },
            {
                code: "A system designed to attract and analyze attackers is known as a _________ .",
                correctOutput: "honeypot"
            },
            {
                code: "An IDS that detects deviations from normal behavior is called an _________‑based IDS.",
                correctOutput: "anomaly"
            },
            {
                code: "Malware disguised as legitimate software is a _________ .",
                correctOutput: "Trojan horse"
            },
            {
                code: "A firewall that inspects packets up to the application layer is an _________ gateway.",
                correctOutput: "application"
            },
            {
                code: "The practice of tricking users into revealing confidential information is called _________ .",
                correctOutput: "social engineering"
            }
        ],
        fillInBlank: [
            {
                sentence: "A firewall that monitors the state of active connections is called a _________ inspection firewall.",
                answer: "stateful"
            },
            {
                sentence: "Ransomware encrypts files and demands _________ for decryption.",
                answer: "payment"
            },
            {
                sentence: "A _________ network is a decoy designed to lure and monitor attackers.",
                answer: "honeypot"
            },
            {
                sentence: "The acronym DMZ stands for _________ Zone.",
                answer: "Demilitarized"
            },
            {
                sentence: "A program that appears useful but performs malicious actions is a _________ .",
                answer: "Trojan"
            },
            {
                sentence: "A _________ is a self‑contained program that replicates by copying itself to other programs.",
                answer: "virus"
            },
            {
                sentence: "An Intrusion Detection System is abbreviated as _________ .",
                answer: "IDS"
            }
        ]
    }


};