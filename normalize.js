function processStrings(strings) {
	const normalizedStrings = strings.map(str => {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	});

	const transformedStrings = normalizedStrings.map(str => {
		return str.replace(/\s+/g, "-").toLowerCase();
	});

	return transformedStrings;
}

//const inputStrings = ["Accueil", "À propos", "FAQ", "Nos offres", "Mentions légales", "Horaires et informations pratique", "Atelier", "Contact", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Nos examens de langue", "Soutien scolaire", "Formation professionnelle", "Formation professionnelle", "Formation professionnelle", "Formation professionnelle", "Financement", "Financement", "Financement", "Financement", "Financement", "Financement", "Financement", "Financement"]
const inputStrings = ["EV@lang", "Lingusakill", "Certification Pipplet Flex", "DELF DALF", "DCL", "Lilate", "TEF CANADA", "TEF IRN", "TCF", "", "", "Formation efficacité professionnelle", "Règles d'orthographe", "Interprète traducteur", "", "Aide individuelle à la fomation", "fond paritaire de sécurisation des parcours pros (fpspp)", "(Contrat sécurisation professionnelle (CSP))", "POE", "Plan de développement des compétences", "Plan de formation", "CPF"]
const outputStrings = processStrings(inputStrings);
console.log(outputStrings);