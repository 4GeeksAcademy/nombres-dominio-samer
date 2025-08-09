     let pronoun = ['the', 'our'];
        let adj = ['great', 'big'];
        let noun = ['jogger', 'racoon'];
        let currentIndex = 0;
        let domainNames = [];

      
        for (let i = 0; i < pronoun.length; i++) {
            for (let j = 0; j < adj.length; j++) {
                for (let k = 0; k < noun.length; k++) {
                    let domain = pronoun[i] + adj[j] + noun[k] + '.com';
                    domainNames.push(domain);
                }
            }
        }

        function generateDomains() {
            if (currentIndex < domainNames.length) {
                let domain = domainNames[currentIndex];
                console.log(`${currentIndex + 1}. ${domain}`);
                
                let html = document.getElementById('results').innerHTML;
                html += `<p>${currentIndex + 1}. ${domain}</p>`;
                document.getElementById('results').innerHTML = html;
                
                currentIndex++;
                
                if (currentIndex === domainNames.length) {
                    document.getElementById('results').innerHTML += `<p><strong>Total: ${domainNames.length} dominios generados</strong></p>`;
                    console.log(`\nTotal de combinaciones generadas: ${domainNames.length}`);
                }
            }
        }