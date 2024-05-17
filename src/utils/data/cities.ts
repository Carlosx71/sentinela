const cities = [
  {
    cidade: "ALTA FLORESTA D'OESTE",
    estado: 'RO',
  },
  {
    cidade: 'ARIQUEMES',
    estado: 'RO',
  },
  {
    cidade: 'CABIXI',
    estado: 'RO',
  },
  {
    cidade: 'CACOAL',
    estado: 'RO',
  },
  {
    cidade: 'CEREJEIRAS',
    estado: 'RO',
  },
  {
    cidade: 'COLORADO DO OESTE',
    estado: 'RO',
  },
  {
    cidade: 'CORUMBIARA',
    estado: 'RO',
  },
  {
    cidade: 'COSTA MARQUES',
    estado: 'RO',
  },
  {
    cidade: "ESPIGÃO D'OESTE",
    estado: 'RO',
  },
  {
    cidade: 'GUAJARÁ-MIRIM',
    estado: 'RO',
  },
  {
    cidade: 'JARU',
    estado: 'RO',
  },
  {
    cidade: 'JI-PARANÁ',
    estado: 'RO',
  },
  {
    cidade: "MACHADINHO D'OESTE",
    estado: 'RO',
  },
  {
    cidade: "NOVA BRASILÂNDIA D'OESTE",
    estado: 'RO',
  },
  {
    cidade: 'OURO PRETO DO OESTE',
    estado: 'RO',
  },
  {
    cidade: 'PIMENTA BUENO',
    estado: 'RO',
  },
  {
    cidade: 'PORTO VELHO',
    estado: 'RO',
  },
  {
    cidade: 'PRESIDENTE MÉDICI',
    estado: 'RO',
  },
  {
    cidade: 'RIO CRESPO',
    estado: 'RO',
  },
  {
    cidade: 'ROLIM DE MOURA',
    estado: 'RO',
  },
  {
    cidade: "SANTA LUZIA D'OESTE",
    estado: 'RO',
  },
  {
    cidade: 'VILHENA',
    estado: 'RO',
  },
  {
    cidade: 'SÃO MIGUEL DO GUAPORÉ',
    estado: 'RO',
  },
  {
    cidade: 'NOVA MAMORÉ',
    estado: 'RO',
  },
  {
    cidade: "ALVORADA D'OESTE",
    estado: 'RO',
  },
  {
    cidade: 'ALTO ALEGRE DOS PARECIS',
    estado: 'RO',
  },
  {
    cidade: 'ALTO PARAÍSO',
    estado: 'RO',
  },
  {
    cidade: 'BURITIS',
    estado: 'RO',
  },
  {
    cidade: 'NOVO HORIZONTE DO OESTE',
    estado: 'RO',
  },
  {
    cidade: 'CACAULÂNDIA',
    estado: 'RO',
  },
  {
    cidade: 'CAMPO NOVO DE RONDÔNIA',
    estado: 'RO',
  },
  {
    cidade: 'CANDEIAS DO JAMARI',
    estado: 'RO',
  },
  {
    cidade: 'CASTANHEIRAS',
    estado: 'RO',
  },
  {
    cidade: 'CHUPINGUAIA',
    estado: 'RO',
  },
  {
    cidade: 'CUJUBIM',
    estado: 'RO',
  },
  {
    cidade: 'GOVERNADOR JORGE TEIXEIRA',
    estado: 'RO',
  },
  {
    cidade: 'ITAPUÃ DO OESTE',
    estado: 'RO',
  },
  {
    cidade: 'MINISTRO ANDREAZZA',
    estado: 'RO',
  },
  {
    cidade: 'MIRANTE DA SERRA',
    estado: 'RO',
  },
  {
    cidade: 'MONTE NEGRO',
    estado: 'RO',
  },
  {
    cidade: 'NOVA UNIÃO',
    estado: 'RO',
  },
  {
    cidade: 'PARECIS',
    estado: 'RO',
  },
  {
    cidade: 'PIMENTEIRAS DO OESTE',
    estado: 'RO',
  },
  {
    cidade: 'PRIMAVERA DE RONDÔNIA',
    estado: 'RO',
  },
  {
    cidade: "SÃO FELIPE D'OESTE",
    estado: 'RO',
  },
  {
    cidade: 'SÃO FRANCISCO DO GUAPORÉ',
    estado: 'RO',
  },
  {
    cidade: 'SERINGUEIRAS',
    estado: 'RO',
  },
  {
    cidade: 'TEIXEIRÓPOLIS',
    estado: 'RO',
  },
  {
    cidade: 'THEOBROMA',
    estado: 'RO',
  },
  {
    cidade: 'URUPÁ',
    estado: 'RO',
  },
  {
    cidade: 'VALE DO ANARI',
    estado: 'RO',
  },
  {
    cidade: 'VALE DO PARAÍSO',
    estado: 'RO',
  },
  {
    cidade: 'ACRELÂNDIA',
    estado: 'AC',
  },
  {
    cidade: 'ASSIS BRASIL',
    estado: 'AC',
  },
  {
    cidade: 'BRASILÉIA',
    estado: 'AC',
  },
  {
    cidade: 'BUJARI',
    estado: 'AC',
  },
  {
    cidade: 'CAPIXABA',
    estado: 'AC',
  },
  {
    cidade: 'CRUZEIRO DO SUL',
    estado: 'AC',
  },
  {
    cidade: 'EPITACIOLÂNDIA',
    estado: 'AC',
  },
  {
    cidade: 'FEIJÓ',
    estado: 'AC',
  },
  {
    cidade: 'JORDÃO',
    estado: 'AC',
  },
  {
    cidade: 'MÂNCIO LIMA',
    estado: 'AC',
  },
  {
    cidade: 'MANOEL URBANO',
    estado: 'AC',
  },
  {
    cidade: 'MARECHAL THAUMATURGO',
    estado: 'AC',
  },
  {
    cidade: 'PLÁCIDO DE CASTRO',
    estado: 'AC',
  },
  {
    cidade: 'PORTO WALTER',
    estado: 'AC',
  },
  {
    cidade: 'RIO BRANCO',
    estado: 'AC',
  },
  {
    cidade: 'RODRIGUES ALVES',
    estado: 'AC',
  },
  {
    cidade: 'SANTA ROSA DO PURUS',
    estado: 'AC',
  },
  {
    cidade: 'SENADOR GUIOMARD',
    estado: 'AC',
  },
  {
    cidade: 'SENA MADUREIRA',
    estado: 'AC',
  },
  {
    cidade: 'TARAUACÁ',
    estado: 'AC',
  },
  {
    cidade: 'XAPURI',
    estado: 'AC',
  },
  {
    cidade: 'PORTO ACRE',
    estado: 'AC',
  },
  {
    cidade: 'ALVARÃES',
    estado: 'AM',
  },
  {
    cidade: 'AMATURÁ',
    estado: 'AM',
  },
  {
    cidade: 'ANAMÃ',
    estado: 'AM',
  },
  {
    cidade: 'ANORI',
    estado: 'AM',
  },
  {
    cidade: 'APUÍ',
    estado: 'AM',
  },
  {
    cidade: 'ATALAIA DO NORTE',
    estado: 'AM',
  },
  {
    cidade: 'AUTAZES',
    estado: 'AM',
  },
  {
    cidade: 'BARCELOS',
    estado: 'AM',
  },
  {
    cidade: 'BARREIRINHA',
    estado: 'AM',
  },
  {
    cidade: 'BENJAMIN CONSTANT',
    estado: 'AM',
  },
  {
    cidade: 'BERURI',
    estado: 'AM',
  },
  {
    cidade: 'BOA VISTA DO RAMOS',
    estado: 'AM',
  },
  {
    cidade: 'BOCA DO ACRE',
    estado: 'AM',
  },
  {
    cidade: 'BORBA',
    estado: 'AM',
  },
  {
    cidade: 'CAAPIRANGA',
    estado: 'AM',
  },
  {
    cidade: 'CANUTAMA',
    estado: 'AM',
  },
  {
    cidade: 'CARAUARI',
    estado: 'AM',
  },
  {
    cidade: 'CAREIRO',
    estado: 'AM',
  },
  {
    cidade: 'CAREIRO DA VÁRZEA',
    estado: 'AM',
  },
  {
    cidade: 'COARI',
    estado: 'AM',
  },
  {
    cidade: 'CODAJÁS',
    estado: 'AM',
  },
  {
    cidade: 'EIRUNEPÉ',
    estado: 'AM',
  },
  {
    cidade: 'ENVIRA',
    estado: 'AM',
  },
  {
    cidade: 'FONTE BOA',
    estado: 'AM',
  },
  {
    cidade: 'GUAJARÁ',
    estado: 'AM',
  },
  {
    cidade: 'HUMAITÁ',
    estado: 'AM',
  },
  {
    cidade: 'IPIXUNA',
    estado: 'AM',
  },
  {
    cidade: 'IRANDUBA',
    estado: 'AM',
  },
  {
    cidade: 'ITACOATIARA',
    estado: 'AM',
  },
  {
    cidade: 'ITAMARATI',
    estado: 'AM',
  },
  {
    cidade: 'ITAPIRANGA',
    estado: 'AM',
  },
  {
    cidade: 'JAPURÁ',
    estado: 'AM',
  },
  {
    cidade: 'JURUÁ',
    estado: 'AM',
  },
  {
    cidade: 'JUTAÍ',
    estado: 'AM',
  },
  {
    cidade: 'LÁBREA',
    estado: 'AM',
  },
  {
    cidade: 'MANACAPURU',
    estado: 'AM',
  },
  {
    cidade: 'MANAQUIRI',
    estado: 'AM',
  },
  {
    cidade: 'MANAUS',
    estado: 'AM',
  },
  {
    cidade: 'MANICORÉ',
    estado: 'AM',
  },
  {
    cidade: 'MARAÃ',
    estado: 'AM',
  },
  {
    cidade: 'MAUÉS',
    estado: 'AM',
  },
  {
    cidade: 'NHAMUNDÁ',
    estado: 'AM',
  },
  {
    cidade: 'NOVA OLINDA DO NORTE',
    estado: 'AM',
  },
  {
    cidade: 'NOVO AIRÃO',
    estado: 'AM',
  },
  {
    cidade: 'NOVO ARIPUANÃ',
    estado: 'AM',
  },
  {
    cidade: 'PARINTINS',
    estado: 'AM',
  },
  {
    cidade: 'PAUINI',
    estado: 'AM',
  },
  {
    cidade: 'PRESIDENTE FIGUEIREDO',
    estado: 'AM',
  },
  {
    cidade: 'RIO PRETO DA EVA',
    estado: 'AM',
  },
  {
    cidade: 'SANTA ISABEL DO RIO NEGRO',
    estado: 'AM',
  },
  {
    cidade: 'SANTO ANTÔNIO DO IÇÁ',
    estado: 'AM',
  },
  {
    cidade: 'SÃO GABRIEL DA CACHOEIRA',
    estado: 'AM',
  },
  {
    cidade: 'SÃO PAULO DE OLIVENÇA',
    estado: 'AM',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO UATUMÃ',
    estado: 'AM',
  },
  {
    cidade: 'SILVES',
    estado: 'AM',
  },
  {
    cidade: 'TABATINGA',
    estado: 'AM',
  },
  {
    cidade: 'TAPAUÁ',
    estado: 'AM',
  },
  {
    cidade: 'TEFÉ',
    estado: 'AM',
  },
  {
    cidade: 'TONANTINS',
    estado: 'AM',
  },
  {
    cidade: 'UARINI',
    estado: 'AM',
  },
  {
    cidade: 'URUCARÁ',
    estado: 'AM',
  },
  {
    cidade: 'URUCURITUBA',
    estado: 'AM',
  },
  {
    cidade: 'AMAJARI',
    estado: 'RR',
  },
  {
    cidade: 'ALTO ALEGRE',
    estado: 'RR',
  },
  {
    cidade: 'BOA VISTA',
    estado: 'RR',
  },
  {
    cidade: 'BONFIM',
    estado: 'RR',
  },
  {
    cidade: 'CANTÁ',
    estado: 'RR',
  },
  {
    cidade: 'CARACARAÍ',
    estado: 'RR',
  },
  {
    cidade: 'CAROEBE',
    estado: 'RR',
  },
  {
    cidade: 'IRACEMA',
    estado: 'RR',
  },
  {
    cidade: 'MUCAJAÍ',
    estado: 'RR',
  },
  {
    cidade: 'NORMANDIA',
    estado: 'RR',
  },
  {
    cidade: 'PACARAIMA',
    estado: 'RR',
  },
  {
    cidade: 'RORAINÓPOLIS',
    estado: 'RR',
  },
  {
    cidade: 'SÃO JOÃO DA BALIZA',
    estado: 'RR',
  },
  {
    cidade: 'SÃO LUIZ',
    estado: 'RR',
  },
  {
    cidade: 'UIRAMUTÃ',
    estado: 'RR',
  },
  {
    cidade: 'ABAETETUBA',
    estado: 'PA',
  },
  {
    cidade: 'ABEL FIGUEIREDO',
    estado: 'PA',
  },
  {
    cidade: 'ACARÁ',
    estado: 'PA',
  },
  {
    cidade: 'AFUÁ',
    estado: 'PA',
  },
  {
    cidade: 'ÁGUA AZUL DO NORTE',
    estado: 'PA',
  },
  {
    cidade: 'ALENQUER',
    estado: 'PA',
  },
  {
    cidade: 'ALMEIRIM',
    estado: 'PA',
  },
  {
    cidade: 'ALTAMIRA',
    estado: 'PA',
  },
  {
    cidade: 'ANAJÁS',
    estado: 'PA',
  },
  {
    cidade: 'ANANINDEUA',
    estado: 'PA',
  },
  {
    cidade: 'ANAPU',
    estado: 'PA',
  },
  {
    cidade: 'AUGUSTO CORRÊA',
    estado: 'PA',
  },
  {
    cidade: 'AURORA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'AVEIRO',
    estado: 'PA',
  },
  {
    cidade: 'BAGRE',
    estado: 'PA',
  },
  {
    cidade: 'BAIÃO',
    estado: 'PA',
  },
  {
    cidade: 'BANNACH',
    estado: 'PA',
  },
  {
    cidade: 'BARCARENA',
    estado: 'PA',
  },
  {
    cidade: 'BELÉM',
    estado: 'PA',
  },
  {
    cidade: 'BELTERRA',
    estado: 'PA',
  },
  {
    cidade: 'BENEVIDES',
    estado: 'PA',
  },
  {
    cidade: 'BOM JESUS DO TOCANTINS',
    estado: 'PA',
  },
  {
    cidade: 'BONITO',
    estado: 'PA',
  },
  {
    cidade: 'BRAGANÇA',
    estado: 'PA',
  },
  {
    cidade: 'BRASIL NOVO',
    estado: 'PA',
  },
  {
    cidade: 'BREJO GRANDE DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'BREU BRANCO',
    estado: 'PA',
  },
  {
    cidade: 'BREVES',
    estado: 'PA',
  },
  {
    cidade: 'BUJARU',
    estado: 'PA',
  },
  {
    cidade: 'CACHOEIRA DO PIRIÁ',
    estado: 'PA',
  },
  {
    cidade: 'CACHOEIRA DO ARARI',
    estado: 'PA',
  },
  {
    cidade: 'CAMETÁ',
    estado: 'PA',
  },
  {
    cidade: 'CANAÃ DOS CARAJÁS',
    estado: 'PA',
  },
  {
    cidade: 'CAPANEMA',
    estado: 'PA',
  },
  {
    cidade: 'CAPITÃO POÇO',
    estado: 'PA',
  },
  {
    cidade: 'CASTANHAL',
    estado: 'PA',
  },
  {
    cidade: 'CHAVES',
    estado: 'PA',
  },
  {
    cidade: 'COLARES',
    estado: 'PA',
  },
  {
    cidade: 'CONCEIÇÃO DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'CONCÓRDIA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'CUMARU DO NORTE',
    estado: 'PA',
  },
  {
    cidade: 'CURIONÓPOLIS',
    estado: 'PA',
  },
  {
    cidade: 'CURRALINHO',
    estado: 'PA',
  },
  {
    cidade: 'CURUÁ',
    estado: 'PA',
  },
  {
    cidade: 'CURUÇÁ',
    estado: 'PA',
  },
  {
    cidade: 'DOM ELISEU',
    estado: 'PA',
  },
  {
    cidade: 'ELDORADO DO CARAJÁS',
    estado: 'PA',
  },
  {
    cidade: 'FARO',
    estado: 'PA',
  },
  {
    cidade: 'FLORESTA DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'GARRAFÃO DO NORTE',
    estado: 'PA',
  },
  {
    cidade: 'GOIANÉSIA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'GURUPÁ',
    estado: 'PA',
  },
  {
    cidade: 'IGARAPÉ-AÇU',
    estado: 'PA',
  },
  {
    cidade: 'IGARAPÉ-MIRI',
    estado: 'PA',
  },
  {
    cidade: 'INHANGAPI',
    estado: 'PA',
  },
  {
    cidade: 'IPIXUNA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'IRITUIA',
    estado: 'PA',
  },
  {
    cidade: 'ITAITUBA',
    estado: 'PA',
  },
  {
    cidade: 'ITUPIRANGA',
    estado: 'PA',
  },
  {
    cidade: 'JACAREACANGA',
    estado: 'PA',
  },
  {
    cidade: 'JACUNDÁ',
    estado: 'PA',
  },
  {
    cidade: 'JURUTI',
    estado: 'PA',
  },
  {
    cidade: 'LIMOEIRO DO AJURU',
    estado: 'PA',
  },
  {
    cidade: 'MÃE DO RIO',
    estado: 'PA',
  },
  {
    cidade: 'MAGALHÃES BARATA',
    estado: 'PA',
  },
  {
    cidade: 'MARABÁ',
    estado: 'PA',
  },
  {
    cidade: 'MARACANÃ',
    estado: 'PA',
  },
  {
    cidade: 'MARAPANIM',
    estado: 'PA',
  },
  {
    cidade: 'MARITUBA',
    estado: 'PA',
  },
  {
    cidade: 'MEDICILÂNDIA',
    estado: 'PA',
  },
  {
    cidade: 'MELGAÇO',
    estado: 'PA',
  },
  {
    cidade: 'MOCAJUBA',
    estado: 'PA',
  },
  {
    cidade: 'MOJU',
    estado: 'PA',
  },
  {
    cidade: 'MOJUÍ DOS CAMPOS',
    estado: 'PA',
  },
  {
    cidade: 'MONTE ALEGRE',
    estado: 'PA',
  },
  {
    cidade: 'MUANÁ',
    estado: 'PA',
  },
  {
    cidade: 'NOVA ESPERANÇA DO PIRIÁ',
    estado: 'PA',
  },
  {
    cidade: 'NOVA IPIXUNA',
    estado: 'PA',
  },
  {
    cidade: 'NOVA TIMBOTEUA',
    estado: 'PA',
  },
  {
    cidade: 'NOVO PROGRESSO',
    estado: 'PA',
  },
  {
    cidade: 'NOVO REPARTIMENTO',
    estado: 'PA',
  },
  {
    cidade: 'ÓBIDOS',
    estado: 'PA',
  },
  {
    cidade: 'OEIRAS DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'ORIXIMINÁ',
    estado: 'PA',
  },
  {
    cidade: 'OURÉM',
    estado: 'PA',
  },
  {
    cidade: 'OURILÂNDIA DO NORTE',
    estado: 'PA',
  },
  {
    cidade: 'PACAJÁ',
    estado: 'PA',
  },
  {
    cidade: 'PALESTINA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'PARAGOMINAS',
    estado: 'PA',
  },
  {
    cidade: 'PARAUAPEBAS',
    estado: 'PA',
  },
  {
    cidade: "PAU D'ARCO",
    estado: 'PA',
  },
  {
    cidade: 'PEIXE-BOI',
    estado: 'PA',
  },
  {
    cidade: 'PIÇARRA',
    estado: 'PA',
  },
  {
    cidade: 'PLACAS',
    estado: 'PA',
  },
  {
    cidade: 'PONTA DE PEDRAS',
    estado: 'PA',
  },
  {
    cidade: 'PORTEL',
    estado: 'PA',
  },
  {
    cidade: 'PORTO DE MOZ',
    estado: 'PA',
  },
  {
    cidade: 'PRAINHA',
    estado: 'PA',
  },
  {
    cidade: 'PRIMAVERA',
    estado: 'PA',
  },
  {
    cidade: 'QUATIPURU',
    estado: 'PA',
  },
  {
    cidade: 'REDENÇÃO',
    estado: 'PA',
  },
  {
    cidade: 'RIO MARIA',
    estado: 'PA',
  },
  {
    cidade: 'RONDON DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'RURÓPOLIS',
    estado: 'PA',
  },
  {
    cidade: 'SALINÓPOLIS',
    estado: 'PA',
  },
  {
    cidade: 'SALVATERRA',
    estado: 'PA',
  },
  {
    cidade: 'SANTA BÁRBARA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'SANTA CRUZ DO ARARI',
    estado: 'PA',
  },
  {
    cidade: 'SANTA IZABEL DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'SANTA LUZIA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'SANTA MARIA DAS BARREIRAS',
    estado: 'PA',
  },
  {
    cidade: 'SANTA MARIA DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'SANTANA DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'SANTARÉM',
    estado: 'PA',
  },
  {
    cidade: 'SANTARÉM NOVO',
    estado: 'PA',
  },
  {
    cidade: 'SANTO ANTÔNIO DO TAUÁ',
    estado: 'PA',
  },
  {
    cidade: 'SÃO CAETANO DE ODIVELAS',
    estado: 'PA',
  },
  {
    cidade: 'SÃO DOMINGOS DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'SÃO DOMINGOS DO CAPIM',
    estado: 'PA',
  },
  {
    cidade: 'SÃO FÉLIX DO XINGU',
    estado: 'PA',
  },
  {
    cidade: 'SÃO FRANCISCO DO PARÁ',
    estado: 'PA',
  },
  {
    cidade: 'SÃO GERALDO DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'SÃO JOÃO DA PONTA',
    estado: 'PA',
  },
  {
    cidade: 'SÃO JOÃO DE PIRABAS',
    estado: 'PA',
  },
  {
    cidade: 'SÃO JOÃO DO ARAGUAIA',
    estado: 'PA',
  },
  {
    cidade: 'SÃO MIGUEL DO GUAMÁ',
    estado: 'PA',
  },
  {
    cidade: 'SÃO SEBASTIÃO DA BOA VISTA',
    estado: 'PA',
  },
  {
    cidade: 'SAPUCAIA',
    estado: 'PA',
  },
  {
    cidade: 'SENADOR JOSÉ PORFÍRIO',
    estado: 'PA',
  },
  {
    cidade: 'SOURE',
    estado: 'PA',
  },
  {
    cidade: 'TAILÂNDIA',
    estado: 'PA',
  },
  {
    cidade: 'TERRA ALTA',
    estado: 'PA',
  },
  {
    cidade: 'TERRA SANTA',
    estado: 'PA',
  },
  {
    cidade: 'TOMÉ-AÇU',
    estado: 'PA',
  },
  {
    cidade: 'TRACUATEUA',
    estado: 'PA',
  },
  {
    cidade: 'TRAIRÃO',
    estado: 'PA',
  },
  {
    cidade: 'TUCUMÃ',
    estado: 'PA',
  },
  {
    cidade: 'TUCURUÍ',
    estado: 'PA',
  },
  {
    cidade: 'ULIANÓPOLIS',
    estado: 'PA',
  },
  {
    cidade: 'URUARÁ',
    estado: 'PA',
  },
  {
    cidade: 'VIGIA',
    estado: 'PA',
  },
  {
    cidade: 'VISEU',
    estado: 'PA',
  },
  {
    cidade: 'VITÓRIA DO XINGU',
    estado: 'PA',
  },
  {
    cidade: 'XINGUARA',
    estado: 'PA',
  },
  {
    cidade: 'SERRA DO NAVIO',
    estado: 'AP',
  },
  {
    cidade: 'AMAPÁ',
    estado: 'AP',
  },
  {
    cidade: 'PEDRA BRANCA DO AMAPARI',
    estado: 'AP',
  },
  {
    cidade: 'CALÇOENE',
    estado: 'AP',
  },
  {
    cidade: 'CUTIAS',
    estado: 'AP',
  },
  {
    cidade: 'FERREIRA GOMES',
    estado: 'AP',
  },
  {
    cidade: 'ITAUBAL',
    estado: 'AP',
  },
  {
    cidade: 'LARANJAL DO JARI',
    estado: 'AP',
  },
  {
    cidade: 'MACAPÁ',
    estado: 'AP',
  },
  {
    cidade: 'MAZAGÃO',
    estado: 'AP',
  },
  {
    cidade: 'OIAPOQUE',
    estado: 'AP',
  },
  {
    cidade: 'PORTO GRANDE',
    estado: 'AP',
  },
  {
    cidade: 'PRACUÚBA',
    estado: 'AP',
  },
  {
    cidade: 'SANTANA',
    estado: 'AP',
  },
  {
    cidade: 'TARTARUGALZINHO',
    estado: 'AP',
  },
  {
    cidade: 'VITÓRIA DO JARI',
    estado: 'AP',
  },
  {
    cidade: 'ABREULÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'AGUIARNÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'ALIANÇA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'ALMAS',
    estado: 'TO',
  },
  {
    cidade: 'ALVORADA',
    estado: 'TO',
  },
  {
    cidade: 'ANANÁS',
    estado: 'TO',
  },
  {
    cidade: 'ANGICO',
    estado: 'TO',
  },
  {
    cidade: 'APARECIDA DO RIO NEGRO',
    estado: 'TO',
  },
  {
    cidade: 'ARAGOMINAS',
    estado: 'TO',
  },
  {
    cidade: 'ARAGUACEMA',
    estado: 'TO',
  },
  {
    cidade: 'ARAGUAÇU',
    estado: 'TO',
  },
  {
    cidade: 'ARAGUAÍNA',
    estado: 'TO',
  },
  {
    cidade: 'ARAGUANÃ',
    estado: 'TO',
  },
  {
    cidade: 'ARAGUATINS',
    estado: 'TO',
  },
  {
    cidade: 'ARAPOEMA',
    estado: 'TO',
  },
  {
    cidade: 'ARRAIAS',
    estado: 'TO',
  },
  {
    cidade: 'AUGUSTINÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'AURORA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'AXIXÁ DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'BABAÇULÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'BANDEIRANTES DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'BARRA DO OURO',
    estado: 'TO',
  },
  {
    cidade: 'BARROLÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'BERNARDO SAYÃO',
    estado: 'TO',
  },
  {
    cidade: 'BOM JESUS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'BRASILÂNDIA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'BREJINHO DE NAZARÉ',
    estado: 'TO',
  },
  {
    cidade: 'BURITI DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'CACHOEIRINHA',
    estado: 'TO',
  },
  {
    cidade: 'CAMPOS LINDOS',
    estado: 'TO',
  },
  {
    cidade: 'CARIRI DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'CARMOLÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'CARRASCO BONITO',
    estado: 'TO',
  },
  {
    cidade: 'CASEARA',
    estado: 'TO',
  },
  {
    cidade: 'CENTENÁRIO',
    estado: 'TO',
  },
  {
    cidade: 'CHAPADA DE AREIA',
    estado: 'TO',
  },
  {
    cidade: 'CHAPADA DA NATIVIDADE',
    estado: 'TO',
  },
  {
    cidade: 'COLINAS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'COMBINADO',
    estado: 'TO',
  },
  {
    cidade: 'CONCEIÇÃO DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'COUTO MAGALHÃES',
    estado: 'TO',
  },
  {
    cidade: 'CRISTALÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'CRIXÁS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'DARCINÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'DIANÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'DIVINÓPOLIS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'DOIS IRMÃOS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'DUERÉ',
    estado: 'TO',
  },
  {
    cidade: 'ESPERANTINA',
    estado: 'TO',
  },
  {
    cidade: 'FÁTIMA',
    estado: 'TO',
  },
  {
    cidade: 'FIGUEIRÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'FILADÉLFIA',
    estado: 'TO',
  },
  {
    cidade: 'FORMOSO DO ARAGUAIA',
    estado: 'TO',
  },
  {
    cidade: 'TABOCÃO',
    estado: 'TO',
  },
  {
    cidade: 'GOIANORTE',
    estado: 'TO',
  },
  {
    cidade: 'GOIATINS',
    estado: 'TO',
  },
  {
    cidade: 'GUARAÍ',
    estado: 'TO',
  },
  {
    cidade: 'GURUPI',
    estado: 'TO',
  },
  {
    cidade: 'IPUEIRAS',
    estado: 'TO',
  },
  {
    cidade: 'ITACAJÁ',
    estado: 'TO',
  },
  {
    cidade: 'ITAGUATINS',
    estado: 'TO',
  },
  {
    cidade: 'ITAPIRATINS',
    estado: 'TO',
  },
  {
    cidade: 'ITAPORÃ DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'JAÚ DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'JUARINA',
    estado: 'TO',
  },
  {
    cidade: 'LAGOA DA CONFUSÃO',
    estado: 'TO',
  },
  {
    cidade: 'LAGOA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'LAJEADO',
    estado: 'TO',
  },
  {
    cidade: 'LAVANDEIRA',
    estado: 'TO',
  },
  {
    cidade: 'LIZARDA',
    estado: 'TO',
  },
  {
    cidade: 'LUZINÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'MARIANÓPOLIS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'MATEIROS',
    estado: 'TO',
  },
  {
    cidade: 'MAURILÂNDIA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'MIRACEMA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'MIRANORTE',
    estado: 'TO',
  },
  {
    cidade: 'MONTE DO CARMO',
    estado: 'TO',
  },
  {
    cidade: 'MONTE SANTO DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'PALMEIRAS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'MURICILÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'NATIVIDADE',
    estado: 'TO',
  },
  {
    cidade: 'NAZARÉ',
    estado: 'TO',
  },
  {
    cidade: 'NOVA OLINDA',
    estado: 'TO',
  },
  {
    cidade: 'NOVA ROSALÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'NOVO ACORDO',
    estado: 'TO',
  },
  {
    cidade: 'NOVO ALEGRE',
    estado: 'TO',
  },
  {
    cidade: 'NOVO JARDIM',
    estado: 'TO',
  },
  {
    cidade: 'OLIVEIRA DE FÁTIMA',
    estado: 'TO',
  },
  {
    cidade: 'PALMEIRANTE',
    estado: 'TO',
  },
  {
    cidade: 'PALMEIRÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'PARAÍSO DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'PARANÃ',
    estado: 'TO',
  },
  {
    cidade: "PAU D'ARCO",
    estado: 'TO',
  },
  {
    cidade: 'PEDRO AFONSO',
    estado: 'TO',
  },
  {
    cidade: 'PEIXE',
    estado: 'TO',
  },
  {
    cidade: 'PEQUIZEIRO',
    estado: 'TO',
  },
  {
    cidade: 'COLMÉIA',
    estado: 'TO',
  },
  {
    cidade: 'PINDORAMA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'PIRAQUÊ',
    estado: 'TO',
  },
  {
    cidade: 'PIUM',
    estado: 'TO',
  },
  {
    cidade: 'PONTE ALTA DO BOM JESUS',
    estado: 'TO',
  },
  {
    cidade: 'PONTE ALTA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'PORTO ALEGRE DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'PORTO NACIONAL',
    estado: 'TO',
  },
  {
    cidade: 'PRAIA NORTE',
    estado: 'TO',
  },
  {
    cidade: 'PRESIDENTE KENNEDY',
    estado: 'TO',
  },
  {
    cidade: 'PUGMIL',
    estado: 'TO',
  },
  {
    cidade: 'RECURSOLÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'RIACHINHO',
    estado: 'TO',
  },
  {
    cidade: 'RIO DA CONCEIÇÃO',
    estado: 'TO',
  },
  {
    cidade: 'RIO DOS BOIS',
    estado: 'TO',
  },
  {
    cidade: 'RIO SONO',
    estado: 'TO',
  },
  {
    cidade: 'SAMPAIO',
    estado: 'TO',
  },
  {
    cidade: 'SANDOLÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'SANTA FÉ DO ARAGUAIA',
    estado: 'TO',
  },
  {
    cidade: 'SANTA MARIA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SANTA RITA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SANTA ROSA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SANTA TEREZA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SANTA TEREZINHA DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SÃO BENTO DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SÃO FÉLIX DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SÃO MIGUEL DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SÃO SALVADOR DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SÃO VALÉRIO',
    estado: 'TO',
  },
  {
    cidade: 'SILVANÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'SÍTIO NOVO DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'SUCUPIRA',
    estado: 'TO',
  },
  {
    cidade: 'TAGUATINGA',
    estado: 'TO',
  },
  {
    cidade: 'TAIPAS DO TOCANTINS',
    estado: 'TO',
  },
  {
    cidade: 'TALISMÃ',
    estado: 'TO',
  },
  {
    cidade: 'PALMAS',
    estado: 'TO',
  },
  {
    cidade: 'TOCANTÍNIA',
    estado: 'TO',
  },
  {
    cidade: 'TOCANTINÓPOLIS',
    estado: 'TO',
  },
  {
    cidade: 'TUPIRAMA',
    estado: 'TO',
  },
  {
    cidade: 'TUPIRATINS',
    estado: 'TO',
  },
  {
    cidade: 'WANDERLÂNDIA',
    estado: 'TO',
  },
  {
    cidade: 'XAMBIOÁ',
    estado: 'TO',
  },
  {
    cidade: 'AÇAILÂNDIA',
    estado: 'MA',
  },
  {
    cidade: 'AFONSO CUNHA',
    estado: 'MA',
  },
  {
    cidade: 'ÁGUA DOCE DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'ALCÂNTARA',
    estado: 'MA',
  },
  {
    cidade: 'ALDEIAS ALTAS',
    estado: 'MA',
  },
  {
    cidade: 'ALTAMIRA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'ALTO ALEGRE DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'ALTO ALEGRE DO PINDARÉ',
    estado: 'MA',
  },
  {
    cidade: 'ALTO PARNAÍBA',
    estado: 'MA',
  },
  {
    cidade: 'AMAPÁ DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'AMARANTE DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'ANAJATUBA',
    estado: 'MA',
  },
  {
    cidade: 'ANAPURUS',
    estado: 'MA',
  },
  {
    cidade: 'APICUM-AÇU',
    estado: 'MA',
  },
  {
    cidade: 'ARAGUANÃ',
    estado: 'MA',
  },
  {
    cidade: 'ARAIOSES',
    estado: 'MA',
  },
  {
    cidade: 'ARAME',
    estado: 'MA',
  },
  {
    cidade: 'ARARI',
    estado: 'MA',
  },
  {
    cidade: 'AXIXÁ',
    estado: 'MA',
  },
  {
    cidade: 'BACABAL',
    estado: 'MA',
  },
  {
    cidade: 'BACABEIRA',
    estado: 'MA',
  },
  {
    cidade: 'BACURI',
    estado: 'MA',
  },
  {
    cidade: 'BACURITUBA',
    estado: 'MA',
  },
  {
    cidade: 'BALSAS',
    estado: 'MA',
  },
  {
    cidade: 'BARÃO DE GRAJAÚ',
    estado: 'MA',
  },
  {
    cidade: 'BARRA DO CORDA',
    estado: 'MA',
  },
  {
    cidade: 'BARREIRINHAS',
    estado: 'MA',
  },
  {
    cidade: 'BELÁGUA',
    estado: 'MA',
  },
  {
    cidade: 'BELA VISTA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'BENEDITO LEITE',
    estado: 'MA',
  },
  {
    cidade: 'BEQUIMÃO',
    estado: 'MA',
  },
  {
    cidade: 'BERNARDO DO MEARIM',
    estado: 'MA',
  },
  {
    cidade: 'BOA VISTA DO GURUPI',
    estado: 'MA',
  },
  {
    cidade: 'BOM JARDIM',
    estado: 'MA',
  },
  {
    cidade: 'BOM JESUS DAS SELVAS',
    estado: 'MA',
  },
  {
    cidade: 'BOM LUGAR',
    estado: 'MA',
  },
  {
    cidade: 'BREJO',
    estado: 'MA',
  },
  {
    cidade: 'BREJO DE AREIA',
    estado: 'MA',
  },
  {
    cidade: 'BURITI',
    estado: 'MA',
  },
  {
    cidade: 'BURITI BRAVO',
    estado: 'MA',
  },
  {
    cidade: 'BURITICUPU',
    estado: 'MA',
  },
  {
    cidade: 'BURITIRANA',
    estado: 'MA',
  },
  {
    cidade: 'CACHOEIRA GRANDE',
    estado: 'MA',
  },
  {
    cidade: 'CAJAPIÓ',
    estado: 'MA',
  },
  {
    cidade: 'CAJARI',
    estado: 'MA',
  },
  {
    cidade: 'CAMPESTRE DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'CÂNDIDO MENDES',
    estado: 'MA',
  },
  {
    cidade: 'CANTANHEDE',
    estado: 'MA',
  },
  {
    cidade: 'CAPINZAL DO NORTE',
    estado: 'MA',
  },
  {
    cidade: 'CAROLINA',
    estado: 'MA',
  },
  {
    cidade: 'CARUTAPERA',
    estado: 'MA',
  },
  {
    cidade: 'CAXIAS',
    estado: 'MA',
  },
  {
    cidade: 'CEDRAL',
    estado: 'MA',
  },
  {
    cidade: 'CENTRAL DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'CENTRO DO GUILHERME',
    estado: 'MA',
  },
  {
    cidade: 'CENTRO NOVO DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'CHAPADINHA',
    estado: 'MA',
  },
  {
    cidade: 'CIDELÂNDIA',
    estado: 'MA',
  },
  {
    cidade: 'CODÓ',
    estado: 'MA',
  },
  {
    cidade: 'COELHO NETO',
    estado: 'MA',
  },
  {
    cidade: 'COLINAS',
    estado: 'MA',
  },
  {
    cidade: 'CONCEIÇÃO DO LAGO-AÇU',
    estado: 'MA',
  },
  {
    cidade: 'COROATÁ',
    estado: 'MA',
  },
  {
    cidade: 'CURURUPU',
    estado: 'MA',
  },
  {
    cidade: 'DAVINÓPOLIS',
    estado: 'MA',
  },
  {
    cidade: 'DOM PEDRO',
    estado: 'MA',
  },
  {
    cidade: 'DUQUE BACELAR',
    estado: 'MA',
  },
  {
    cidade: 'ESPERANTINÓPOLIS',
    estado: 'MA',
  },
  {
    cidade: 'ESTREITO',
    estado: 'MA',
  },
  {
    cidade: 'FEIRA NOVA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'FERNANDO FALCÃO',
    estado: 'MA',
  },
  {
    cidade: 'FORMOSA DA SERRA NEGRA',
    estado: 'MA',
  },
  {
    cidade: 'FORTALEZA DOS NOGUEIRAS',
    estado: 'MA',
  },
  {
    cidade: 'FORTUNA',
    estado: 'MA',
  },
  {
    cidade: 'GODOFREDO VIANA',
    estado: 'MA',
  },
  {
    cidade: 'GONÇALVES DIAS',
    estado: 'MA',
  },
  {
    cidade: 'GOVERNADOR ARCHER',
    estado: 'MA',
  },
  {
    cidade: 'GOVERNADOR EDISON LOBÃO',
    estado: 'MA',
  },
  {
    cidade: 'GOVERNADOR EUGÊNIO BARROS',
    estado: 'MA',
  },
  {
    cidade: 'GOVERNADOR LUIZ ROCHA',
    estado: 'MA',
  },
  {
    cidade: 'GOVERNADOR NEWTON BELLO',
    estado: 'MA',
  },
  {
    cidade: 'GOVERNADOR NUNES FREIRE',
    estado: 'MA',
  },
  {
    cidade: 'GRAÇA ARANHA',
    estado: 'MA',
  },
  {
    cidade: 'GRAJAÚ',
    estado: 'MA',
  },
  {
    cidade: 'GUIMARÃES',
    estado: 'MA',
  },
  {
    cidade: 'HUMBERTO DE CAMPOS',
    estado: 'MA',
  },
  {
    cidade: 'ICATU',
    estado: 'MA',
  },
  {
    cidade: 'IGARAPÉ DO MEIO',
    estado: 'MA',
  },
  {
    cidade: 'IGARAPÉ GRANDE',
    estado: 'MA',
  },
  {
    cidade: 'IMPERATRIZ',
    estado: 'MA',
  },
  {
    cidade: 'ITAIPAVA DO GRAJAÚ',
    estado: 'MA',
  },
  {
    cidade: 'ITAPECURU MIRIM',
    estado: 'MA',
  },
  {
    cidade: 'ITINGA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'JATOBÁ',
    estado: 'MA',
  },
  {
    cidade: 'JENIPAPO DOS VIEIRAS',
    estado: 'MA',
  },
  {
    cidade: 'JOÃO LISBOA',
    estado: 'MA',
  },
  {
    cidade: 'JOSELÂNDIA',
    estado: 'MA',
  },
  {
    cidade: 'JUNCO DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'LAGO DA PEDRA',
    estado: 'MA',
  },
  {
    cidade: 'LAGO DO JUNCO',
    estado: 'MA',
  },
  {
    cidade: 'LAGO VERDE',
    estado: 'MA',
  },
  {
    cidade: 'LAGOA DO MATO',
    estado: 'MA',
  },
  {
    cidade: 'LAGO DOS RODRIGUES',
    estado: 'MA',
  },
  {
    cidade: 'LAGOA GRANDE DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'LAJEADO NOVO',
    estado: 'MA',
  },
  {
    cidade: 'LIMA CAMPOS',
    estado: 'MA',
  },
  {
    cidade: 'LORETO',
    estado: 'MA',
  },
  {
    cidade: 'LUÍS DOMINGUES',
    estado: 'MA',
  },
  {
    cidade: 'MAGALHÃES DE ALMEIDA',
    estado: 'MA',
  },
  {
    cidade: 'MARACAÇUMÉ',
    estado: 'MA',
  },
  {
    cidade: 'MARAJÁ DO SENA',
    estado: 'MA',
  },
  {
    cidade: 'MARANHÃOZINHO',
    estado: 'MA',
  },
  {
    cidade: 'MATA ROMA',
    estado: 'MA',
  },
  {
    cidade: 'MATINHA',
    estado: 'MA',
  },
  {
    cidade: 'MATÕES',
    estado: 'MA',
  },
  {
    cidade: 'MATÕES DO NORTE',
    estado: 'MA',
  },
  {
    cidade: 'MILAGRES DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'MIRADOR',
    estado: 'MA',
  },
  {
    cidade: 'MIRANDA DO NORTE',
    estado: 'MA',
  },
  {
    cidade: 'MIRINZAL',
    estado: 'MA',
  },
  {
    cidade: 'MONÇÃO',
    estado: 'MA',
  },
  {
    cidade: 'MONTES ALTOS',
    estado: 'MA',
  },
  {
    cidade: 'MORROS',
    estado: 'MA',
  },
  {
    cidade: 'NINA RODRIGUES',
    estado: 'MA',
  },
  {
    cidade: 'NOVA COLINAS',
    estado: 'MA',
  },
  {
    cidade: 'NOVA IORQUE',
    estado: 'MA',
  },
  {
    cidade: 'NOVA OLINDA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: "OLHO D'ÁGUA DAS CUNHÃS",
    estado: 'MA',
  },
  {
    cidade: 'OLINDA NOVA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'PAÇO DO LUMIAR',
    estado: 'MA',
  },
  {
    cidade: 'PALMEIRÂNDIA',
    estado: 'MA',
  },
  {
    cidade: 'PARAIBANO',
    estado: 'MA',
  },
  {
    cidade: 'PARNARAMA',
    estado: 'MA',
  },
  {
    cidade: 'PASSAGEM FRANCA',
    estado: 'MA',
  },
  {
    cidade: 'PASTOS BONS',
    estado: 'MA',
  },
  {
    cidade: 'PAULINO NEVES',
    estado: 'MA',
  },
  {
    cidade: 'PAULO RAMOS',
    estado: 'MA',
  },
  {
    cidade: 'PEDREIRAS',
    estado: 'MA',
  },
  {
    cidade: 'PEDRO DO ROSÁRIO',
    estado: 'MA',
  },
  {
    cidade: 'PENALVA',
    estado: 'MA',
  },
  {
    cidade: 'PERI MIRIM',
    estado: 'MA',
  },
  {
    cidade: 'PERITORÓ',
    estado: 'MA',
  },
  {
    cidade: 'PINDARÉ-MIRIM',
    estado: 'MA',
  },
  {
    cidade: 'PINHEIRO',
    estado: 'MA',
  },
  {
    cidade: 'PIO XII',
    estado: 'MA',
  },
  {
    cidade: 'PIRAPEMAS',
    estado: 'MA',
  },
  {
    cidade: 'POÇÃO DE PEDRAS',
    estado: 'MA',
  },
  {
    cidade: 'PORTO FRANCO',
    estado: 'MA',
  },
  {
    cidade: 'PORTO RICO DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'PRESIDENTE DUTRA',
    estado: 'MA',
  },
  {
    cidade: 'PRESIDENTE JUSCELINO',
    estado: 'MA',
  },
  {
    cidade: 'PRESIDENTE MÉDICI',
    estado: 'MA',
  },
  {
    cidade: 'PRESIDENTE SARNEY',
    estado: 'MA',
  },
  {
    cidade: 'PRESIDENTE VARGAS',
    estado: 'MA',
  },
  {
    cidade: 'PRIMEIRA CRUZ',
    estado: 'MA',
  },
  {
    cidade: 'RAPOSA',
    estado: 'MA',
  },
  {
    cidade: 'RIACHÃO',
    estado: 'MA',
  },
  {
    cidade: 'RIBAMAR FIQUENE',
    estado: 'MA',
  },
  {
    cidade: 'ROSÁRIO',
    estado: 'MA',
  },
  {
    cidade: 'SAMBAÍBA',
    estado: 'MA',
  },
  {
    cidade: 'SANTA FILOMENA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SANTA HELENA',
    estado: 'MA',
  },
  {
    cidade: 'SANTA INÊS',
    estado: 'MA',
  },
  {
    cidade: 'SANTA LUZIA',
    estado: 'MA',
  },
  {
    cidade: 'SANTA LUZIA DO PARUÁ',
    estado: 'MA',
  },
  {
    cidade: 'SANTA QUITÉRIA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SANTA RITA',
    estado: 'MA',
  },
  {
    cidade: 'SANTANA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SANTO AMARO DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SANTO ANTÔNIO DOS LOPES',
    estado: 'MA',
  },
  {
    cidade: 'SÃO BENEDITO DO RIO PRETO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO BENTO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO BERNARDO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO DOMINGOS DO AZEITÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO DOMINGOS DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO FÉLIX DE BALSAS',
    estado: 'MA',
  },
  {
    cidade: 'SÃO FRANCISCO DO BREJÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO FRANCISCO DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOÃO BATISTA',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOÃO DO CARÚ',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOÃO DO PARAÍSO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOÃO DO SOTER',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOÃO DOS PATOS',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOSÉ DE RIBAMAR',
    estado: 'MA',
  },
  {
    cidade: 'SÃO JOSÉ DOS BASÍLIOS',
    estado: 'MA',
  },
  {
    cidade: 'SÃO LUÍS',
    estado: 'MA',
  },
  {
    cidade: 'SÃO LUÍS GONZAGA DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO MATEUS DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO PEDRO DA ÁGUA BRANCA',
    estado: 'MA',
  },
  {
    cidade: 'SÃO PEDRO DOS CRENTES',
    estado: 'MA',
  },
  {
    cidade: 'SÃO RAIMUNDO DAS MANGABEIRAS',
    estado: 'MA',
  },
  {
    cidade: 'SÃO RAIMUNDO DO DOCA BEZERRA',
    estado: 'MA',
  },
  {
    cidade: 'SÃO ROBERTO',
    estado: 'MA',
  },
  {
    cidade: 'SÃO VICENTE FERRER',
    estado: 'MA',
  },
  {
    cidade: 'SATUBINHA',
    estado: 'MA',
  },
  {
    cidade: 'SENADOR ALEXANDRE COSTA',
    estado: 'MA',
  },
  {
    cidade: 'SENADOR LA ROCQUE',
    estado: 'MA',
  },
  {
    cidade: 'SERRANO DO MARANHÃO',
    estado: 'MA',
  },
  {
    cidade: 'SÍTIO NOVO',
    estado: 'MA',
  },
  {
    cidade: 'SUCUPIRA DO NORTE',
    estado: 'MA',
  },
  {
    cidade: 'SUCUPIRA DO RIACHÃO',
    estado: 'MA',
  },
  {
    cidade: 'TASSO FRAGOSO',
    estado: 'MA',
  },
  {
    cidade: 'TIMBIRAS',
    estado: 'MA',
  },
  {
    cidade: 'TIMON',
    estado: 'MA',
  },
  {
    cidade: 'TRIZIDELA DO VALE',
    estado: 'MA',
  },
  {
    cidade: 'TUFILÂNDIA',
    estado: 'MA',
  },
  {
    cidade: 'TUNTUM',
    estado: 'MA',
  },
  {
    cidade: 'TURIAÇU',
    estado: 'MA',
  },
  {
    cidade: 'TURILÂNDIA',
    estado: 'MA',
  },
  {
    cidade: 'TUTÓIA',
    estado: 'MA',
  },
  {
    cidade: 'URBANO SANTOS',
    estado: 'MA',
  },
  {
    cidade: 'VARGEM GRANDE',
    estado: 'MA',
  },
  {
    cidade: 'VIANA',
    estado: 'MA',
  },
  {
    cidade: 'VILA NOVA DOS MARTÍRIOS',
    estado: 'MA',
  },
  {
    cidade: 'VITÓRIA DO MEARIM',
    estado: 'MA',
  },
  {
    cidade: 'VITORINO FREIRE',
    estado: 'MA',
  },
  {
    cidade: 'ZÉ DOCA',
    estado: 'MA',
  },
  {
    cidade: 'ACAUÃ',
    estado: 'PI',
  },
  {
    cidade: 'AGRICOLÂNDIA',
    estado: 'PI',
  },
  {
    cidade: 'ÁGUA BRANCA',
    estado: 'PI',
  },
  {
    cidade: 'ALAGOINHA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'ALEGRETE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'ALTO LONGÁ',
    estado: 'PI',
  },
  {
    cidade: 'ALTOS',
    estado: 'PI',
  },
  {
    cidade: 'ALVORADA DO GURGUÉIA',
    estado: 'PI',
  },
  {
    cidade: 'AMARANTE',
    estado: 'PI',
  },
  {
    cidade: 'ANGICAL DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'ANÍSIO DE ABREU',
    estado: 'PI',
  },
  {
    cidade: 'ANTÔNIO ALMEIDA',
    estado: 'PI',
  },
  {
    cidade: 'AROAZES',
    estado: 'PI',
  },
  {
    cidade: 'AROEIRAS DO ITAIM',
    estado: 'PI',
  },
  {
    cidade: 'ARRAIAL',
    estado: 'PI',
  },
  {
    cidade: 'ASSUNÇÃO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'AVELINO LOPES',
    estado: 'PI',
  },
  {
    cidade: 'BAIXA GRANDE DO RIBEIRO',
    estado: 'PI',
  },
  {
    cidade: "BARRA D'ALCÂNTARA",
    estado: 'PI',
  },
  {
    cidade: 'BARRAS',
    estado: 'PI',
  },
  {
    cidade: 'BARREIRAS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BARRO DURO',
    estado: 'PI',
  },
  {
    cidade: 'BATALHA',
    estado: 'PI',
  },
  {
    cidade: 'BELA VISTA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BELÉM DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BENEDITINOS',
    estado: 'PI',
  },
  {
    cidade: 'BERTOLÍNIA',
    estado: 'PI',
  },
  {
    cidade: 'BETÂNIA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BOA HORA',
    estado: 'PI',
  },
  {
    cidade: 'BOCAINA',
    estado: 'PI',
  },
  {
    cidade: 'BOM JESUS',
    estado: 'PI',
  },
  {
    cidade: 'BOM PRINCÍPIO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BONFIM DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BOQUEIRÃO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BRASILEIRA',
    estado: 'PI',
  },
  {
    cidade: 'BREJO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'BURITI DOS LOPES',
    estado: 'PI',
  },
  {
    cidade: 'BURITI DOS MONTES',
    estado: 'PI',
  },
  {
    cidade: 'CABECEIRAS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAJAZEIRAS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAJUEIRO DA PRAIA',
    estado: 'PI',
  },
  {
    cidade: 'CALDEIRÃO GRANDE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAMPINAS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAMPO ALEGRE DO FIDALGO',
    estado: 'PI',
  },
  {
    cidade: 'CAMPO GRANDE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAMPO LARGO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAMPO MAIOR',
    estado: 'PI',
  },
  {
    cidade: 'CANAVIEIRA',
    estado: 'PI',
  },
  {
    cidade: 'CANTO DO BURITI',
    estado: 'PI',
  },
  {
    cidade: 'CAPITÃO DE CAMPOS',
    estado: 'PI',
  },
  {
    cidade: 'CAPITÃO GERVÁSIO OLIVEIRA',
    estado: 'PI',
  },
  {
    cidade: 'CARACOL',
    estado: 'PI',
  },
  {
    cidade: 'CARAÚBAS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CARIDADE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CASTELO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CAXINGÓ',
    estado: 'PI',
  },
  {
    cidade: 'COCAL',
    estado: 'PI',
  },
  {
    cidade: 'COCAL DE TELHA',
    estado: 'PI',
  },
  {
    cidade: 'COCAL DOS ALVES',
    estado: 'PI',
  },
  {
    cidade: 'COIVARAS',
    estado: 'PI',
  },
  {
    cidade: 'COLÔNIA DO GURGUÉIA',
    estado: 'PI',
  },
  {
    cidade: 'COLÔNIA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CONCEIÇÃO DO CANINDÉ',
    estado: 'PI',
  },
  {
    cidade: 'CORONEL JOSÉ DIAS',
    estado: 'PI',
  },
  {
    cidade: 'CORRENTE',
    estado: 'PI',
  },
  {
    cidade: 'CRISTALÂNDIA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'CRISTINO CASTRO',
    estado: 'PI',
  },
  {
    cidade: 'CURIMATÁ',
    estado: 'PI',
  },
  {
    cidade: 'CURRAIS',
    estado: 'PI',
  },
  {
    cidade: 'CURRALINHOS',
    estado: 'PI',
  },
  {
    cidade: 'CURRAL NOVO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'DEMERVAL LOBÃO',
    estado: 'PI',
  },
  {
    cidade: 'DIRCEU ARCOVERDE',
    estado: 'PI',
  },
  {
    cidade: 'DOM EXPEDITO LOPES',
    estado: 'PI',
  },
  {
    cidade: 'DOMINGOS MOURÃO',
    estado: 'PI',
  },
  {
    cidade: 'DOM INOCÊNCIO',
    estado: 'PI',
  },
  {
    cidade: 'ELESBÃO VELOSO',
    estado: 'PI',
  },
  {
    cidade: 'ELISEU MARTINS',
    estado: 'PI',
  },
  {
    cidade: 'ESPERANTINA',
    estado: 'PI',
  },
  {
    cidade: 'FARTURA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'FLORES DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'FLORESTA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'FLORIANO',
    estado: 'PI',
  },
  {
    cidade: 'FRANCINÓPOLIS',
    estado: 'PI',
  },
  {
    cidade: 'FRANCISCO AYRES',
    estado: 'PI',
  },
  {
    cidade: 'FRANCISCO MACEDO',
    estado: 'PI',
  },
  {
    cidade: 'FRANCISCO SANTOS',
    estado: 'PI',
  },
  {
    cidade: 'FRONTEIRAS',
    estado: 'PI',
  },
  {
    cidade: 'GEMINIANO',
    estado: 'PI',
  },
  {
    cidade: 'GILBUÉS',
    estado: 'PI',
  },
  {
    cidade: 'GUADALUPE',
    estado: 'PI',
  },
  {
    cidade: 'GUARIBAS',
    estado: 'PI',
  },
  {
    cidade: 'HUGO NAPOLEÃO',
    estado: 'PI',
  },
  {
    cidade: 'ILHA GRANDE',
    estado: 'PI',
  },
  {
    cidade: 'INHUMA',
    estado: 'PI',
  },
  {
    cidade: 'IPIRANGA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'ISAÍAS COELHO',
    estado: 'PI',
  },
  {
    cidade: 'ITAINÓPOLIS',
    estado: 'PI',
  },
  {
    cidade: 'ITAUEIRA',
    estado: 'PI',
  },
  {
    cidade: 'JACOBINA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'JAICÓS',
    estado: 'PI',
  },
  {
    cidade: 'JARDIM DO MULATO',
    estado: 'PI',
  },
  {
    cidade: 'JATOBÁ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'JERUMENHA',
    estado: 'PI',
  },
  {
    cidade: 'JOÃO COSTA',
    estado: 'PI',
  },
  {
    cidade: 'JOAQUIM PIRES',
    estado: 'PI',
  },
  {
    cidade: 'JOCA MARQUES',
    estado: 'PI',
  },
  {
    cidade: 'JOSÉ DE FREITAS',
    estado: 'PI',
  },
  {
    cidade: 'JUAZEIRO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'JÚLIO BORGES',
    estado: 'PI',
  },
  {
    cidade: 'JUREMA',
    estado: 'PI',
  },
  {
    cidade: 'LAGOINHA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'LAGOA ALEGRE',
    estado: 'PI',
  },
  {
    cidade: 'LAGOA DO BARRO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'LAGOA DE SÃO FRANCISCO',
    estado: 'PI',
  },
  {
    cidade: 'LAGOA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'LAGOA DO SÍTIO',
    estado: 'PI',
  },
  {
    cidade: 'LANDRI SALES',
    estado: 'PI',
  },
  {
    cidade: 'LUÍS CORREIA',
    estado: 'PI',
  },
  {
    cidade: 'LUZILÂNDIA',
    estado: 'PI',
  },
  {
    cidade: 'MADEIRO',
    estado: 'PI',
  },
  {
    cidade: 'MANOEL EMÍDIO',
    estado: 'PI',
  },
  {
    cidade: 'MARCOLÂNDIA',
    estado: 'PI',
  },
  {
    cidade: 'MARCOS PARENTE',
    estado: 'PI',
  },
  {
    cidade: 'MASSAPÊ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'MATIAS OLÍMPIO',
    estado: 'PI',
  },
  {
    cidade: 'MIGUEL ALVES',
    estado: 'PI',
  },
  {
    cidade: 'MIGUEL LEÃO',
    estado: 'PI',
  },
  {
    cidade: 'MILTON BRANDÃO',
    estado: 'PI',
  },
  {
    cidade: 'MONSENHOR GIL',
    estado: 'PI',
  },
  {
    cidade: 'MONSENHOR HIPÓLITO',
    estado: 'PI',
  },
  {
    cidade: 'MONTE ALEGRE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'MORRO CABEÇA NO TEMPO',
    estado: 'PI',
  },
  {
    cidade: 'MORRO DO CHAPÉU DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'MURICI DOS PORTELAS',
    estado: 'PI',
  },
  {
    cidade: 'NAZARÉ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'NAZÁRIA',
    estado: 'PI',
  },
  {
    cidade: 'NOSSA SENHORA DE NAZARÉ',
    estado: 'PI',
  },
  {
    cidade: 'NOSSA SENHORA DOS REMÉDIOS',
    estado: 'PI',
  },
  {
    cidade: 'NOVO ORIENTE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'NOVO SANTO ANTÔNIO',
    estado: 'PI',
  },
  {
    cidade: 'OEIRAS',
    estado: 'PI',
  },
  {
    cidade: "OLHO D'ÁGUA DO PIAUÍ",
    estado: 'PI',
  },
  {
    cidade: 'PADRE MARCOS',
    estado: 'PI',
  },
  {
    cidade: 'PAES LANDIM',
    estado: 'PI',
  },
  {
    cidade: 'PAJEÚ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'PALMEIRA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'PALMEIRAIS',
    estado: 'PI',
  },
  {
    cidade: 'PAQUETÁ',
    estado: 'PI',
  },
  {
    cidade: 'PARNAGUÁ',
    estado: 'PI',
  },
  {
    cidade: 'PARNAÍBA',
    estado: 'PI',
  },
  {
    cidade: 'PASSAGEM FRANCA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'PATOS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: "PAU D'ARCO DO PIAUÍ",
    estado: 'PI',
  },
  {
    cidade: 'PAULISTANA',
    estado: 'PI',
  },
  {
    cidade: 'PAVUSSU',
    estado: 'PI',
  },
  {
    cidade: 'PEDRO II',
    estado: 'PI',
  },
  {
    cidade: 'PEDRO LAURENTINO',
    estado: 'PI',
  },
  {
    cidade: 'NOVA SANTA RITA',
    estado: 'PI',
  },
  {
    cidade: 'PICOS',
    estado: 'PI',
  },
  {
    cidade: 'PIMENTEIRAS',
    estado: 'PI',
  },
  {
    cidade: 'PIO IX',
    estado: 'PI',
  },
  {
    cidade: 'PIRACURUCA',
    estado: 'PI',
  },
  {
    cidade: 'PIRIPIRI',
    estado: 'PI',
  },
  {
    cidade: 'PORTO',
    estado: 'PI',
  },
  {
    cidade: 'PORTO ALEGRE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'PRATA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'QUEIMADA NOVA',
    estado: 'PI',
  },
  {
    cidade: 'REDENÇÃO DO GURGUÉIA',
    estado: 'PI',
  },
  {
    cidade: 'REGENERAÇÃO',
    estado: 'PI',
  },
  {
    cidade: 'RIACHO FRIO',
    estado: 'PI',
  },
  {
    cidade: 'RIBEIRA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'RIBEIRO GONÇALVES',
    estado: 'PI',
  },
  {
    cidade: 'RIO GRANDE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SANTA CRUZ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SANTA CRUZ DOS MILAGRES',
    estado: 'PI',
  },
  {
    cidade: 'SANTA FILOMENA',
    estado: 'PI',
  },
  {
    cidade: 'SANTA LUZ',
    estado: 'PI',
  },
  {
    cidade: 'SANTANA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SANTA ROSA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SANTO ANTÔNIO DE LISBOA',
    estado: 'PI',
  },
  {
    cidade: 'SANTO ANTÔNIO DOS MILAGRES',
    estado: 'PI',
  },
  {
    cidade: 'SANTO INÁCIO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO BRAZ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO FÉLIX DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO FRANCISCO DE ASSIS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO FRANCISCO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO GONÇALO DO GURGUÉIA',
    estado: 'PI',
  },
  {
    cidade: 'SÃO GONÇALO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOÃO DA CANABRAVA',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOÃO DA FRONTEIRA',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOÃO DA SERRA',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOÃO DA VARJOTA',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOÃO DO ARRAIAL',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOÃO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOSÉ DO DIVINO',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOSÉ DO PEIXE',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JOSÉ DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO JULIÃO',
    estado: 'PI',
  },
  {
    cidade: 'SÃO LOURENÇO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO LUIS DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO MIGUEL DA BAIXA GRANDE',
    estado: 'PI',
  },
  {
    cidade: 'SÃO MIGUEL DO FIDALGO',
    estado: 'PI',
  },
  {
    cidade: 'SÃO MIGUEL DO TAPUIO',
    estado: 'PI',
  },
  {
    cidade: 'SÃO PEDRO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SÃO RAIMUNDO NONATO',
    estado: 'PI',
  },
  {
    cidade: 'SEBASTIÃO BARROS',
    estado: 'PI',
  },
  {
    cidade: 'SEBASTIÃO LEAL',
    estado: 'PI',
  },
  {
    cidade: 'SIGEFREDO PACHECO',
    estado: 'PI',
  },
  {
    cidade: 'SIMÕES',
    estado: 'PI',
  },
  {
    cidade: 'SIMPLÍCIO MENDES',
    estado: 'PI',
  },
  {
    cidade: 'SOCORRO DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'SUSSUAPARA',
    estado: 'PI',
  },
  {
    cidade: 'TAMBORIL DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'TANQUE DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'TERESINA',
    estado: 'PI',
  },
  {
    cidade: 'UNIÃO',
    estado: 'PI',
  },
  {
    cidade: 'URUÇUÍ',
    estado: 'PI',
  },
  {
    cidade: 'VALENÇA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'VÁRZEA BRANCA',
    estado: 'PI',
  },
  {
    cidade: 'VÁRZEA GRANDE',
    estado: 'PI',
  },
  {
    cidade: 'VERA MENDES',
    estado: 'PI',
  },
  {
    cidade: 'VILA NOVA DO PIAUÍ',
    estado: 'PI',
  },
  {
    cidade: 'WALL FERRAZ',
    estado: 'PI',
  },
  {
    cidade: 'ABAIARA',
    estado: 'CE',
  },
  {
    cidade: 'ACARAPE',
    estado: 'CE',
  },
  {
    cidade: 'ACARAÚ',
    estado: 'CE',
  },
  {
    cidade: 'ACOPIARA',
    estado: 'CE',
  },
  {
    cidade: 'AIUABA',
    estado: 'CE',
  },
  {
    cidade: 'ALCÂNTARAS',
    estado: 'CE',
  },
  {
    cidade: 'ALTANEIRA',
    estado: 'CE',
  },
  {
    cidade: 'ALTO SANTO',
    estado: 'CE',
  },
  {
    cidade: 'AMONTADA',
    estado: 'CE',
  },
  {
    cidade: 'ANTONINA DO NORTE',
    estado: 'CE',
  },
  {
    cidade: 'APUIARÉS',
    estado: 'CE',
  },
  {
    cidade: 'AQUIRAZ',
    estado: 'CE',
  },
  {
    cidade: 'ARACATI',
    estado: 'CE',
  },
  {
    cidade: 'ARACOIABA',
    estado: 'CE',
  },
  {
    cidade: 'ARARENDÁ',
    estado: 'CE',
  },
  {
    cidade: 'ARARIPE',
    estado: 'CE',
  },
  {
    cidade: 'ARATUBA',
    estado: 'CE',
  },
  {
    cidade: 'ARNEIROZ',
    estado: 'CE',
  },
  {
    cidade: 'ASSARÉ',
    estado: 'CE',
  },
  {
    cidade: 'AURORA',
    estado: 'CE',
  },
  {
    cidade: 'BAIXIO',
    estado: 'CE',
  },
  {
    cidade: 'BANABUIÚ',
    estado: 'CE',
  },
  {
    cidade: 'BARBALHA',
    estado: 'CE',
  },
  {
    cidade: 'BARREIRA',
    estado: 'CE',
  },
  {
    cidade: 'BARRO',
    estado: 'CE',
  },
  {
    cidade: 'BARROQUINHA',
    estado: 'CE',
  },
  {
    cidade: 'BATURITÉ',
    estado: 'CE',
  },
  {
    cidade: 'BEBERIBE',
    estado: 'CE',
  },
  {
    cidade: 'BELA CRUZ',
    estado: 'CE',
  },
  {
    cidade: 'BOA VIAGEM',
    estado: 'CE',
  },
  {
    cidade: 'BREJO SANTO',
    estado: 'CE',
  },
  {
    cidade: 'CAMOCIM',
    estado: 'CE',
  },
  {
    cidade: 'CAMPOS SALES',
    estado: 'CE',
  },
  {
    cidade: 'CANINDÉ',
    estado: 'CE',
  },
  {
    cidade: 'CAPISTRANO',
    estado: 'CE',
  },
  {
    cidade: 'CARIDADE',
    estado: 'CE',
  },
  {
    cidade: 'CARIRÉ',
    estado: 'CE',
  },
  {
    cidade: 'CARIRIAÇU',
    estado: 'CE',
  },
  {
    cidade: 'CARIÚS',
    estado: 'CE',
  },
  {
    cidade: 'CARNAUBAL',
    estado: 'CE',
  },
  {
    cidade: 'CASCAVEL',
    estado: 'CE',
  },
  {
    cidade: 'CATARINA',
    estado: 'CE',
  },
  {
    cidade: 'CATUNDA',
    estado: 'CE',
  },
  {
    cidade: 'CAUCAIA',
    estado: 'CE',
  },
  {
    cidade: 'CEDRO',
    estado: 'CE',
  },
  {
    cidade: 'CHAVAL',
    estado: 'CE',
  },
  {
    cidade: 'CHORÓ',
    estado: 'CE',
  },
  {
    cidade: 'CHOROZINHO',
    estado: 'CE',
  },
  {
    cidade: 'COREAÚ',
    estado: 'CE',
  },
  {
    cidade: 'CRATEÚS',
    estado: 'CE',
  },
  {
    cidade: 'CRATO',
    estado: 'CE',
  },
  {
    cidade: 'CROATÁ',
    estado: 'CE',
  },
  {
    cidade: 'CRUZ',
    estado: 'CE',
  },
  {
    cidade: 'DEPUTADO IRAPUAN PINHEIRO',
    estado: 'CE',
  },
  {
    cidade: 'ERERÉ',
    estado: 'CE',
  },
  {
    cidade: 'EUSÉBIO',
    estado: 'CE',
  },
  {
    cidade: 'FARIAS BRITO',
    estado: 'CE',
  },
  {
    cidade: 'FORQUILHA',
    estado: 'CE',
  },
  {
    cidade: 'FORTALEZA',
    estado: 'CE',
  },
  {
    cidade: 'FORTIM',
    estado: 'CE',
  },
  {
    cidade: 'FRECHEIRINHA',
    estado: 'CE',
  },
  {
    cidade: 'GENERAL SAMPAIO',
    estado: 'CE',
  },
  {
    cidade: 'GRAÇA',
    estado: 'CE',
  },
  {
    cidade: 'GRANJA',
    estado: 'CE',
  },
  {
    cidade: 'GRANJEIRO',
    estado: 'CE',
  },
  {
    cidade: 'GROAÍRAS',
    estado: 'CE',
  },
  {
    cidade: 'GUAIÚBA',
    estado: 'CE',
  },
  {
    cidade: 'GUARACIABA DO NORTE',
    estado: 'CE',
  },
  {
    cidade: 'GUARAMIRANGA',
    estado: 'CE',
  },
  {
    cidade: 'HIDROLÂNDIA',
    estado: 'CE',
  },
  {
    cidade: 'HORIZONTE',
    estado: 'CE',
  },
  {
    cidade: 'IBARETAMA',
    estado: 'CE',
  },
  {
    cidade: 'IBIAPINA',
    estado: 'CE',
  },
  {
    cidade: 'IBICUITINGA',
    estado: 'CE',
  },
  {
    cidade: 'ICAPUÍ',
    estado: 'CE',
  },
  {
    cidade: 'ICÓ',
    estado: 'CE',
  },
  {
    cidade: 'IGUATU',
    estado: 'CE',
  },
  {
    cidade: 'INDEPENDÊNCIA',
    estado: 'CE',
  },
  {
    cidade: 'IPAPORANGA',
    estado: 'CE',
  },
  {
    cidade: 'IPAUMIRIM',
    estado: 'CE',
  },
  {
    cidade: 'IPU',
    estado: 'CE',
  },
  {
    cidade: 'IPUEIRAS',
    estado: 'CE',
  },
  {
    cidade: 'IRACEMA',
    estado: 'CE',
  },
  {
    cidade: 'IRAUÇUBA',
    estado: 'CE',
  },
  {
    cidade: 'ITAIÇABA',
    estado: 'CE',
  },
  {
    cidade: 'ITAITINGA',
    estado: 'CE',
  },
  {
    cidade: 'ITAPAJÉ',
    estado: 'CE',
  },
  {
    cidade: 'ITAPIPOCA',
    estado: 'CE',
  },
  {
    cidade: 'ITAPIÚNA',
    estado: 'CE',
  },
  {
    cidade: 'ITAREMA',
    estado: 'CE',
  },
  {
    cidade: 'ITATIRA',
    estado: 'CE',
  },
  {
    cidade: 'JAGUARETAMA',
    estado: 'CE',
  },
  {
    cidade: 'JAGUARIBARA',
    estado: 'CE',
  },
  {
    cidade: 'JAGUARIBE',
    estado: 'CE',
  },
  {
    cidade: 'JAGUARUANA',
    estado: 'CE',
  },
  {
    cidade: 'JARDIM',
    estado: 'CE',
  },
  {
    cidade: 'JATI',
    estado: 'CE',
  },
  {
    cidade: 'JIJOCA DE JERICOACOARA',
    estado: 'CE',
  },
  {
    cidade: 'JUAZEIRO DO NORTE',
    estado: 'CE',
  },
  {
    cidade: 'JUCÁS',
    estado: 'CE',
  },
  {
    cidade: 'LAVRAS DA MANGABEIRA',
    estado: 'CE',
  },
  {
    cidade: 'LIMOEIRO DO NORTE',
    estado: 'CE',
  },
  {
    cidade: 'MADALENA',
    estado: 'CE',
  },
  {
    cidade: 'MARACANAÚ',
    estado: 'CE',
  },
  {
    cidade: 'MARANGUAPE',
    estado: 'CE',
  },
  {
    cidade: 'MARCO',
    estado: 'CE',
  },
  {
    cidade: 'MARTINÓPOLE',
    estado: 'CE',
  },
  {
    cidade: 'MASSAPÊ',
    estado: 'CE',
  },
  {
    cidade: 'MAURITI',
    estado: 'CE',
  },
  {
    cidade: 'MERUOCA',
    estado: 'CE',
  },
  {
    cidade: 'MILAGRES',
    estado: 'CE',
  },
  {
    cidade: 'MILHÃ',
    estado: 'CE',
  },
  {
    cidade: 'MIRAÍMA',
    estado: 'CE',
  },
  {
    cidade: 'MISSÃO VELHA',
    estado: 'CE',
  },
  {
    cidade: 'MOMBAÇA',
    estado: 'CE',
  },
  {
    cidade: 'MONSENHOR TABOSA',
    estado: 'CE',
  },
  {
    cidade: 'MORADA NOVA',
    estado: 'CE',
  },
  {
    cidade: 'MORAÚJO',
    estado: 'CE',
  },
  {
    cidade: 'MORRINHOS',
    estado: 'CE',
  },
  {
    cidade: 'MUCAMBO',
    estado: 'CE',
  },
  {
    cidade: 'MULUNGU',
    estado: 'CE',
  },
  {
    cidade: 'NOVA OLINDA',
    estado: 'CE',
  },
  {
    cidade: 'NOVA RUSSAS',
    estado: 'CE',
  },
  {
    cidade: 'NOVO ORIENTE',
    estado: 'CE',
  },
  {
    cidade: 'OCARA',
    estado: 'CE',
  },
  {
    cidade: 'ORÓS',
    estado: 'CE',
  },
  {
    cidade: 'PACAJUS',
    estado: 'CE',
  },
  {
    cidade: 'PACATUBA',
    estado: 'CE',
  },
  {
    cidade: 'PACOTI',
    estado: 'CE',
  },
  {
    cidade: 'PACUJÁ',
    estado: 'CE',
  },
  {
    cidade: 'PALHANO',
    estado: 'CE',
  },
  {
    cidade: 'PALMÁCIA',
    estado: 'CE',
  },
  {
    cidade: 'PARACURU',
    estado: 'CE',
  },
  {
    cidade: 'PARAIPABA',
    estado: 'CE',
  },
  {
    cidade: 'PARAMBU',
    estado: 'CE',
  },
  {
    cidade: 'PARAMOTI',
    estado: 'CE',
  },
  {
    cidade: 'PEDRA BRANCA',
    estado: 'CE',
  },
  {
    cidade: 'PENAFORTE',
    estado: 'CE',
  },
  {
    cidade: 'PENTECOSTE',
    estado: 'CE',
  },
  {
    cidade: 'PEREIRO',
    estado: 'CE',
  },
  {
    cidade: 'PINDORETAMA',
    estado: 'CE',
  },
  {
    cidade: 'PIQUET CARNEIRO',
    estado: 'CE',
  },
  {
    cidade: 'PIRES FERREIRA',
    estado: 'CE',
  },
  {
    cidade: 'PORANGA',
    estado: 'CE',
  },
  {
    cidade: 'PORTEIRAS',
    estado: 'CE',
  },
  {
    cidade: 'POTENGI',
    estado: 'CE',
  },
  {
    cidade: 'POTIRETAMA',
    estado: 'CE',
  },
  {
    cidade: 'QUITERIANÓPOLIS',
    estado: 'CE',
  },
  {
    cidade: 'QUIXADÁ',
    estado: 'CE',
  },
  {
    cidade: 'QUIXELÔ',
    estado: 'CE',
  },
  {
    cidade: 'QUIXERAMOBIM',
    estado: 'CE',
  },
  {
    cidade: 'QUIXERÉ',
    estado: 'CE',
  },
  {
    cidade: 'REDENÇÃO',
    estado: 'CE',
  },
  {
    cidade: 'RERIUTABA',
    estado: 'CE',
  },
  {
    cidade: 'RUSSAS',
    estado: 'CE',
  },
  {
    cidade: 'SABOEIRO',
    estado: 'CE',
  },
  {
    cidade: 'SALITRE',
    estado: 'CE',
  },
  {
    cidade: 'SANTANA DO ACARAÚ',
    estado: 'CE',
  },
  {
    cidade: 'SANTANA DO CARIRI',
    estado: 'CE',
  },
  {
    cidade: 'SANTA QUITÉRIA',
    estado: 'CE',
  },
  {
    cidade: 'SÃO BENEDITO',
    estado: 'CE',
  },
  {
    cidade: 'SÃO GONÇALO DO AMARANTE',
    estado: 'CE',
  },
  {
    cidade: 'SÃO JOÃO DO JAGUARIBE',
    estado: 'CE',
  },
  {
    cidade: 'SÃO LUÍS DO CURU',
    estado: 'CE',
  },
  {
    cidade: 'SENADOR POMPEU',
    estado: 'CE',
  },
  {
    cidade: 'SENADOR SÁ',
    estado: 'CE',
  },
  {
    cidade: 'SOBRAL',
    estado: 'CE',
  },
  {
    cidade: 'SOLONÓPOLE',
    estado: 'CE',
  },
  {
    cidade: 'TABULEIRO DO NORTE',
    estado: 'CE',
  },
  {
    cidade: 'TAMBORIL',
    estado: 'CE',
  },
  {
    cidade: 'TARRAFAS',
    estado: 'CE',
  },
  {
    cidade: 'TAUÁ',
    estado: 'CE',
  },
  {
    cidade: 'TEJUÇUOCA',
    estado: 'CE',
  },
  {
    cidade: 'TIANGUÁ',
    estado: 'CE',
  },
  {
    cidade: 'TRAIRI',
    estado: 'CE',
  },
  {
    cidade: 'TURURU',
    estado: 'CE',
  },
  {
    cidade: 'UBAJARA',
    estado: 'CE',
  },
  {
    cidade: 'UMARI',
    estado: 'CE',
  },
  {
    cidade: 'UMIRIM',
    estado: 'CE',
  },
  {
    cidade: 'URUBURETAMA',
    estado: 'CE',
  },
  {
    cidade: 'URUOCA',
    estado: 'CE',
  },
  {
    cidade: 'VARJOTA',
    estado: 'CE',
  },
  {
    cidade: 'VÁRZEA ALEGRE',
    estado: 'CE',
  },
  {
    cidade: 'VIÇOSA DO CEARÁ',
    estado: 'CE',
  },
  {
    cidade: 'ACARI',
    estado: 'RN',
  },
  {
    cidade: 'AÇU',
    estado: 'RN',
  },
  {
    cidade: 'AFONSO BEZERRA',
    estado: 'RN',
  },
  {
    cidade: 'ÁGUA NOVA',
    estado: 'RN',
  },
  {
    cidade: 'ALEXANDRIA',
    estado: 'RN',
  },
  {
    cidade: 'ALMINO AFONSO',
    estado: 'RN',
  },
  {
    cidade: 'ALTO DO RODRIGUES',
    estado: 'RN',
  },
  {
    cidade: 'ANGICOS',
    estado: 'RN',
  },
  {
    cidade: 'ANTÔNIO MARTINS',
    estado: 'RN',
  },
  {
    cidade: 'APODI',
    estado: 'RN',
  },
  {
    cidade: 'AREIA BRANCA',
    estado: 'RN',
  },
  {
    cidade: 'ARÊS',
    estado: 'RN',
  },
  {
    cidade: 'CAMPO GRANDE',
    estado: 'RN',
  },
  {
    cidade: 'BAÍA FORMOSA',
    estado: 'RN',
  },
  {
    cidade: 'BARAÚNA',
    estado: 'RN',
  },
  {
    cidade: 'BARCELONA',
    estado: 'RN',
  },
  {
    cidade: 'BENTO FERNANDES',
    estado: 'RN',
  },
  {
    cidade: 'BODÓ',
    estado: 'RN',
  },
  {
    cidade: 'BOM JESUS',
    estado: 'RN',
  },
  {
    cidade: 'BREJINHO',
    estado: 'RN',
  },
  {
    cidade: 'CAIÇARA DO NORTE',
    estado: 'RN',
  },
  {
    cidade: 'CAIÇARA DO RIO DO VENTO',
    estado: 'RN',
  },
  {
    cidade: 'CAICÓ',
    estado: 'RN',
  },
  {
    cidade: 'CAMPO REDONDO',
    estado: 'RN',
  },
  {
    cidade: 'CANGUARETAMA',
    estado: 'RN',
  },
  {
    cidade: 'CARAÚBAS',
    estado: 'RN',
  },
  {
    cidade: 'CARNAÚBA DOS DANTAS',
    estado: 'RN',
  },
  {
    cidade: 'CARNAUBAIS',
    estado: 'RN',
  },
  {
    cidade: 'CEARÁ-MIRIM',
    estado: 'RN',
  },
  {
    cidade: 'CERRO CORÁ',
    estado: 'RN',
  },
  {
    cidade: 'CORONEL EZEQUIEL',
    estado: 'RN',
  },
  {
    cidade: 'CORONEL JOÃO PESSOA',
    estado: 'RN',
  },
  {
    cidade: 'CRUZETA',
    estado: 'RN',
  },
  {
    cidade: 'CURRAIS NOVOS',
    estado: 'RN',
  },
  {
    cidade: 'DOUTOR SEVERIANO',
    estado: 'RN',
  },
  {
    cidade: 'PARNAMIRIM',
    estado: 'RN',
  },
  {
    cidade: 'ENCANTO',
    estado: 'RN',
  },
  {
    cidade: 'EQUADOR',
    estado: 'RN',
  },
  {
    cidade: 'ESPÍRITO SANTO',
    estado: 'RN',
  },
  {
    cidade: 'EXTREMOZ',
    estado: 'RN',
  },
  {
    cidade: 'FELIPE GUERRA',
    estado: 'RN',
  },
  {
    cidade: 'FERNANDO PEDROZA',
    estado: 'RN',
  },
  {
    cidade: 'FLORÂNIA',
    estado: 'RN',
  },
  {
    cidade: 'FRANCISCO DANTAS',
    estado: 'RN',
  },
  {
    cidade: 'FRUTUOSO GOMES',
    estado: 'RN',
  },
  {
    cidade: 'GALINHOS',
    estado: 'RN',
  },
  {
    cidade: 'GOIANINHA',
    estado: 'RN',
  },
  {
    cidade: 'GOVERNADOR DIX-SEPT ROSADO',
    estado: 'RN',
  },
  {
    cidade: 'GROSSOS',
    estado: 'RN',
  },
  {
    cidade: 'GUAMARÉ',
    estado: 'RN',
  },
  {
    cidade: 'IELMO MARINHO',
    estado: 'RN',
  },
  {
    cidade: 'IPANGUAÇU',
    estado: 'RN',
  },
  {
    cidade: 'IPUEIRA',
    estado: 'RN',
  },
  {
    cidade: 'ITAJÁ',
    estado: 'RN',
  },
  {
    cidade: 'ITAÚ',
    estado: 'RN',
  },
  {
    cidade: 'JAÇANÃ',
    estado: 'RN',
  },
  {
    cidade: 'JANDAÍRA',
    estado: 'RN',
  },
  {
    cidade: 'JANDUÍS',
    estado: 'RN',
  },
  {
    cidade: 'JANUÁRIO CICCO',
    estado: 'RN',
  },
  {
    cidade: 'JAPI',
    estado: 'RN',
  },
  {
    cidade: 'JARDIM DE ANGICOS',
    estado: 'RN',
  },
  {
    cidade: 'JARDIM DE PIRANHAS',
    estado: 'RN',
  },
  {
    cidade: 'JARDIM DO SERIDÓ',
    estado: 'RN',
  },
  {
    cidade: 'JOÃO CÂMARA',
    estado: 'RN',
  },
  {
    cidade: 'JOÃO DIAS',
    estado: 'RN',
  },
  {
    cidade: 'JOSÉ DA PENHA',
    estado: 'RN',
  },
  {
    cidade: 'JUCURUTU',
    estado: 'RN',
  },
  {
    cidade: 'JUNDIÁ',
    estado: 'RN',
  },
  {
    cidade: "LAGOA D'ANTA",
    estado: 'RN',
  },
  {
    cidade: 'LAGOA DE PEDRAS',
    estado: 'RN',
  },
  {
    cidade: 'LAGOA DE VELHOS',
    estado: 'RN',
  },
  {
    cidade: 'LAGOA NOVA',
    estado: 'RN',
  },
  {
    cidade: 'LAGOA SALGADA',
    estado: 'RN',
  },
  {
    cidade: 'LAJES',
    estado: 'RN',
  },
  {
    cidade: 'LAJES PINTADAS',
    estado: 'RN',
  },
  {
    cidade: 'LUCRÉCIA',
    estado: 'RN',
  },
  {
    cidade: 'LUÍS GOMES',
    estado: 'RN',
  },
  {
    cidade: 'MACAÍBA',
    estado: 'RN',
  },
  {
    cidade: 'MACAU',
    estado: 'RN',
  },
  {
    cidade: 'MAJOR SALES',
    estado: 'RN',
  },
  {
    cidade: 'MARCELINO VIEIRA',
    estado: 'RN',
  },
  {
    cidade: 'MARTINS',
    estado: 'RN',
  },
  {
    cidade: 'MAXARANGUAPE',
    estado: 'RN',
  },
  {
    cidade: 'MESSIAS TARGINO',
    estado: 'RN',
  },
  {
    cidade: 'MONTANHAS',
    estado: 'RN',
  },
  {
    cidade: 'MONTE ALEGRE',
    estado: 'RN',
  },
  {
    cidade: 'MONTE DAS GAMELEIRAS',
    estado: 'RN',
  },
  {
    cidade: 'MOSSORÓ',
    estado: 'RN',
  },
  {
    cidade: 'NATAL',
    estado: 'RN',
  },
  {
    cidade: 'NÍSIA FLORESTA',
    estado: 'RN',
  },
  {
    cidade: 'NOVA CRUZ',
    estado: 'RN',
  },
  {
    cidade: "OLHO D'ÁGUA DO BORGES",
    estado: 'RN',
  },
  {
    cidade: 'OURO BRANCO',
    estado: 'RN',
  },
  {
    cidade: 'PARANÁ',
    estado: 'RN',
  },
  {
    cidade: 'PARAÚ',
    estado: 'RN',
  },
  {
    cidade: 'PARAZINHO',
    estado: 'RN',
  },
  {
    cidade: 'PARELHAS',
    estado: 'RN',
  },
  {
    cidade: 'RIO DO FOGO',
    estado: 'RN',
  },
  {
    cidade: 'PASSA E FICA',
    estado: 'RN',
  },
  {
    cidade: 'PASSAGEM',
    estado: 'RN',
  },
  {
    cidade: 'PATU',
    estado: 'RN',
  },
  {
    cidade: 'SANTA MARIA',
    estado: 'RN',
  },
  {
    cidade: 'PAU DOS FERROS',
    estado: 'RN',
  },
  {
    cidade: 'PEDRA GRANDE',
    estado: 'RN',
  },
  {
    cidade: 'PEDRA PRETA',
    estado: 'RN',
  },
  {
    cidade: 'PEDRO AVELINO',
    estado: 'RN',
  },
  {
    cidade: 'PEDRO VELHO',
    estado: 'RN',
  },
  {
    cidade: 'PENDÊNCIAS',
    estado: 'RN',
  },
  {
    cidade: 'PILÕES',
    estado: 'RN',
  },
  {
    cidade: 'POÇO BRANCO',
    estado: 'RN',
  },
  {
    cidade: 'PORTALEGRE',
    estado: 'RN',
  },
  {
    cidade: 'PORTO DO MANGUE',
    estado: 'RN',
  },
  {
    cidade: 'SERRA CAIADA',
    estado: 'RN',
  },
  {
    cidade: 'PUREZA',
    estado: 'RN',
  },
  {
    cidade: 'RAFAEL FERNANDES',
    estado: 'RN',
  },
  {
    cidade: 'RAFAEL GODEIRO',
    estado: 'RN',
  },
  {
    cidade: 'RIACHO DA CRUZ',
    estado: 'RN',
  },
  {
    cidade: 'RIACHO DE SANTANA',
    estado: 'RN',
  },
  {
    cidade: 'RIACHUELO',
    estado: 'RN',
  },
  {
    cidade: 'RODOLFO FERNANDES',
    estado: 'RN',
  },
  {
    cidade: 'TIBAU',
    estado: 'RN',
  },
  {
    cidade: 'RUY BARBOSA',
    estado: 'RN',
  },
  {
    cidade: 'SANTA CRUZ',
    estado: 'RN',
  },
  {
    cidade: 'SANTANA DO MATOS',
    estado: 'RN',
  },
  {
    cidade: 'SANTANA DO SERIDÓ',
    estado: 'RN',
  },
  {
    cidade: 'SANTO ANTÔNIO',
    estado: 'RN',
  },
  {
    cidade: 'SÃO BENTO DO NORTE',
    estado: 'RN',
  },
  {
    cidade: 'SÃO BENTO DO TRAIRÍ',
    estado: 'RN',
  },
  {
    cidade: 'SÃO FERNANDO',
    estado: 'RN',
  },
  {
    cidade: 'SÃO FRANCISCO DO OESTE',
    estado: 'RN',
  },
  {
    cidade: 'SÃO GONÇALO DO AMARANTE',
    estado: 'RN',
  },
  {
    cidade: 'SÃO JOÃO DO SABUGI',
    estado: 'RN',
  },
  {
    cidade: 'SÃO JOSÉ DE MIPIBU',
    estado: 'RN',
  },
  {
    cidade: 'SÃO JOSÉ DO CAMPESTRE',
    estado: 'RN',
  },
  {
    cidade: 'SÃO JOSÉ DO SERIDÓ',
    estado: 'RN',
  },
  {
    cidade: 'SÃO MIGUEL',
    estado: 'RN',
  },
  {
    cidade: 'SÃO MIGUEL DO GOSTOSO',
    estado: 'RN',
  },
  {
    cidade: 'SÃO PAULO DO POTENGI',
    estado: 'RN',
  },
  {
    cidade: 'SÃO PEDRO',
    estado: 'RN',
  },
  {
    cidade: 'SÃO RAFAEL',
    estado: 'RN',
  },
  {
    cidade: 'SÃO TOMÉ',
    estado: 'RN',
  },
  {
    cidade: 'SÃO VICENTE',
    estado: 'RN',
  },
  {
    cidade: 'SENADOR ELÓI DE SOUZA',
    estado: 'RN',
  },
  {
    cidade: 'SENADOR GEORGINO AVELINO',
    estado: 'RN',
  },
  {
    cidade: 'SERRA DE SÃO BENTO',
    estado: 'RN',
  },
  {
    cidade: 'SERRA DO MEL',
    estado: 'RN',
  },
  {
    cidade: 'SERRA NEGRA DO NORTE',
    estado: 'RN',
  },
  {
    cidade: 'SERRINHA',
    estado: 'RN',
  },
  {
    cidade: 'SERRINHA DOS PINTOS',
    estado: 'RN',
  },
  {
    cidade: 'SEVERIANO MELO',
    estado: 'RN',
  },
  {
    cidade: 'SÍTIO NOVO',
    estado: 'RN',
  },
  {
    cidade: 'TABOLEIRO GRANDE',
    estado: 'RN',
  },
  {
    cidade: 'TAIPU',
    estado: 'RN',
  },
  {
    cidade: 'TANGARÁ',
    estado: 'RN',
  },
  {
    cidade: 'TENENTE ANANIAS',
    estado: 'RN',
  },
  {
    cidade: 'TENENTE LAURENTINO CRUZ',
    estado: 'RN',
  },
  {
    cidade: 'TIBAU DO SUL',
    estado: 'RN',
  },
  {
    cidade: 'TIMBAÚBA DOS BATISTAS',
    estado: 'RN',
  },
  {
    cidade: 'TOUROS',
    estado: 'RN',
  },
  {
    cidade: 'TRIUNFO POTIGUAR',
    estado: 'RN',
  },
  {
    cidade: 'UMARIZAL',
    estado: 'RN',
  },
  {
    cidade: 'UPANEMA',
    estado: 'RN',
  },
  {
    cidade: 'VÁRZEA',
    estado: 'RN',
  },
  {
    cidade: 'VENHA-VER',
    estado: 'RN',
  },
  {
    cidade: 'VERA CRUZ',
    estado: 'RN',
  },
  {
    cidade: 'VIÇOSA',
    estado: 'RN',
  },
  {
    cidade: 'VILA FLOR',
    estado: 'RN',
  },
  {
    cidade: 'ÁGUA BRANCA',
    estado: 'PB',
  },
  {
    cidade: 'AGUIAR',
    estado: 'PB',
  },
  {
    cidade: 'ALAGOA GRANDE',
    estado: 'PB',
  },
  {
    cidade: 'ALAGOA NOVA',
    estado: 'PB',
  },
  {
    cidade: 'ALAGOINHA',
    estado: 'PB',
  },
  {
    cidade: 'ALCANTIL',
    estado: 'PB',
  },
  {
    cidade: 'ALGODÃO DE JANDAÍRA',
    estado: 'PB',
  },
  {
    cidade: 'ALHANDRA',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOÃO DO RIO DO PEIXE',
    estado: 'PB',
  },
  {
    cidade: 'AMPARO',
    estado: 'PB',
  },
  {
    cidade: 'APARECIDA',
    estado: 'PB',
  },
  {
    cidade: 'ARAÇAGI',
    estado: 'PB',
  },
  {
    cidade: 'ARARA',
    estado: 'PB',
  },
  {
    cidade: 'ARARUNA',
    estado: 'PB',
  },
  {
    cidade: 'AREIA',
    estado: 'PB',
  },
  {
    cidade: 'AREIA DE BARAÚNAS',
    estado: 'PB',
  },
  {
    cidade: 'AREIAL',
    estado: 'PB',
  },
  {
    cidade: 'AROEIRAS',
    estado: 'PB',
  },
  {
    cidade: 'ASSUNÇÃO',
    estado: 'PB',
  },
  {
    cidade: 'BAÍA DA TRAIÇÃO',
    estado: 'PB',
  },
  {
    cidade: 'BANANEIRAS',
    estado: 'PB',
  },
  {
    cidade: 'BARAÚNA',
    estado: 'PB',
  },
  {
    cidade: 'BARRA DE SANTANA',
    estado: 'PB',
  },
  {
    cidade: 'BARRA DE SANTA ROSA',
    estado: 'PB',
  },
  {
    cidade: 'BARRA DE SÃO MIGUEL',
    estado: 'PB',
  },
  {
    cidade: 'BAYEUX',
    estado: 'PB',
  },
  {
    cidade: 'BELÉM',
    estado: 'PB',
  },
  {
    cidade: 'BELÉM DO BREJO DO CRUZ',
    estado: 'PB',
  },
  {
    cidade: 'BERNARDINO BATISTA',
    estado: 'PB',
  },
  {
    cidade: 'BOA VENTURA',
    estado: 'PB',
  },
  {
    cidade: 'BOA VISTA',
    estado: 'PB',
  },
  {
    cidade: 'BOM JESUS',
    estado: 'PB',
  },
  {
    cidade: 'BOM SUCESSO',
    estado: 'PB',
  },
  {
    cidade: 'BONITO DE SANTA FÉ',
    estado: 'PB',
  },
  {
    cidade: 'BOQUEIRÃO',
    estado: 'PB',
  },
  {
    cidade: 'IGARACY',
    estado: 'PB',
  },
  {
    cidade: 'BORBOREMA',
    estado: 'PB',
  },
  {
    cidade: 'BREJO DO CRUZ',
    estado: 'PB',
  },
  {
    cidade: 'BREJO DOS SANTOS',
    estado: 'PB',
  },
  {
    cidade: 'CAAPORÃ',
    estado: 'PB',
  },
  {
    cidade: 'CABACEIRAS',
    estado: 'PB',
  },
  {
    cidade: 'CABEDELO',
    estado: 'PB',
  },
  {
    cidade: 'CACHOEIRA DOS ÍNDIOS',
    estado: 'PB',
  },
  {
    cidade: 'CACIMBA DE AREIA',
    estado: 'PB',
  },
  {
    cidade: 'CACIMBA DE DENTRO',
    estado: 'PB',
  },
  {
    cidade: 'CACIMBAS',
    estado: 'PB',
  },
  {
    cidade: 'CAIÇARA',
    estado: 'PB',
  },
  {
    cidade: 'CAJAZEIRAS',
    estado: 'PB',
  },
  {
    cidade: 'CAJAZEIRINHAS',
    estado: 'PB',
  },
  {
    cidade: 'CALDAS BRANDÃO',
    estado: 'PB',
  },
  {
    cidade: 'CAMALAÚ',
    estado: 'PB',
  },
  {
    cidade: 'CAMPINA GRANDE',
    estado: 'PB',
  },
  {
    cidade: 'CAPIM',
    estado: 'PB',
  },
  {
    cidade: 'CARAÚBAS',
    estado: 'PB',
  },
  {
    cidade: 'CARRAPATEIRA',
    estado: 'PB',
  },
  {
    cidade: 'CASSERENGUE',
    estado: 'PB',
  },
  {
    cidade: 'CATINGUEIRA',
    estado: 'PB',
  },
  {
    cidade: 'CATOLÉ DO ROCHA',
    estado: 'PB',
  },
  {
    cidade: 'CATURITÉ',
    estado: 'PB',
  },
  {
    cidade: 'CONCEIÇÃO',
    estado: 'PB',
  },
  {
    cidade: 'CONDADO',
    estado: 'PB',
  },
  {
    cidade: 'CONDE',
    estado: 'PB',
  },
  {
    cidade: 'CONGO',
    estado: 'PB',
  },
  {
    cidade: 'COREMAS',
    estado: 'PB',
  },
  {
    cidade: 'COXIXOLA',
    estado: 'PB',
  },
  {
    cidade: 'CRUZ DO ESPÍRITO SANTO',
    estado: 'PB',
  },
  {
    cidade: 'CUBATI',
    estado: 'PB',
  },
  {
    cidade: 'CUITÉ',
    estado: 'PB',
  },
  {
    cidade: 'CUITEGI',
    estado: 'PB',
  },
  {
    cidade: 'CUITÉ DE MAMANGUAPE',
    estado: 'PB',
  },
  {
    cidade: 'CURRAL DE CIMA',
    estado: 'PB',
  },
  {
    cidade: 'CURRAL VELHO',
    estado: 'PB',
  },
  {
    cidade: 'DAMIÃO',
    estado: 'PB',
  },
  {
    cidade: 'DESTERRO',
    estado: 'PB',
  },
  {
    cidade: 'VISTA SERRANA',
    estado: 'PB',
  },
  {
    cidade: 'DIAMANTE',
    estado: 'PB',
  },
  {
    cidade: 'DONA INÊS',
    estado: 'PB',
  },
  {
    cidade: 'DUAS ESTRADAS',
    estado: 'PB',
  },
  {
    cidade: 'EMAS',
    estado: 'PB',
  },
  {
    cidade: 'ESPERANÇA',
    estado: 'PB',
  },
  {
    cidade: 'FAGUNDES',
    estado: 'PB',
  },
  {
    cidade: 'FREI MARTINHO',
    estado: 'PB',
  },
  {
    cidade: 'GADO BRAVO',
    estado: 'PB',
  },
  {
    cidade: 'GUARABIRA',
    estado: 'PB',
  },
  {
    cidade: 'GURINHÉM',
    estado: 'PB',
  },
  {
    cidade: 'GURJÃO',
    estado: 'PB',
  },
  {
    cidade: 'IBIARA',
    estado: 'PB',
  },
  {
    cidade: 'IMACULADA',
    estado: 'PB',
  },
  {
    cidade: 'INGÁ',
    estado: 'PB',
  },
  {
    cidade: 'ITABAIANA',
    estado: 'PB',
  },
  {
    cidade: 'ITAPORANGA',
    estado: 'PB',
  },
  {
    cidade: 'ITAPOROROCA',
    estado: 'PB',
  },
  {
    cidade: 'ITATUBA',
    estado: 'PB',
  },
  {
    cidade: 'JACARAÚ',
    estado: 'PB',
  },
  {
    cidade: 'JERICÓ',
    estado: 'PB',
  },
  {
    cidade: 'JOÃO PESSOA',
    estado: 'PB',
  },
  {
    cidade: 'JUAREZ TÁVORA',
    estado: 'PB',
  },
  {
    cidade: 'JUAZEIRINHO',
    estado: 'PB',
  },
  {
    cidade: 'JUNCO DO SERIDÓ',
    estado: 'PB',
  },
  {
    cidade: 'JURIPIRANGA',
    estado: 'PB',
  },
  {
    cidade: 'JURU',
    estado: 'PB',
  },
  {
    cidade: 'LAGOA',
    estado: 'PB',
  },
  {
    cidade: 'LAGOA DE DENTRO',
    estado: 'PB',
  },
  {
    cidade: 'LAGOA SECA',
    estado: 'PB',
  },
  {
    cidade: 'LASTRO',
    estado: 'PB',
  },
  {
    cidade: 'LIVRAMENTO',
    estado: 'PB',
  },
  {
    cidade: 'LOGRADOURO',
    estado: 'PB',
  },
  {
    cidade: 'LUCENA',
    estado: 'PB',
  },
  {
    cidade: "MÃE D'ÁGUA",
    estado: 'PB',
  },
  {
    cidade: 'MALTA',
    estado: 'PB',
  },
  {
    cidade: 'MAMANGUAPE',
    estado: 'PB',
  },
  {
    cidade: 'MANAÍRA',
    estado: 'PB',
  },
  {
    cidade: 'MARCAÇÃO',
    estado: 'PB',
  },
  {
    cidade: 'MARI',
    estado: 'PB',
  },
  {
    cidade: 'MARIZÓPOLIS',
    estado: 'PB',
  },
  {
    cidade: 'MASSARANDUBA',
    estado: 'PB',
  },
  {
    cidade: 'MATARACA',
    estado: 'PB',
  },
  {
    cidade: 'MATINHAS',
    estado: 'PB',
  },
  {
    cidade: 'MATO GROSSO',
    estado: 'PB',
  },
  {
    cidade: 'MATURÉIA',
    estado: 'PB',
  },
  {
    cidade: 'MOGEIRO',
    estado: 'PB',
  },
  {
    cidade: 'MONTADAS',
    estado: 'PB',
  },
  {
    cidade: 'MONTE HOREBE',
    estado: 'PB',
  },
  {
    cidade: 'MONTEIRO',
    estado: 'PB',
  },
  {
    cidade: 'MULUNGU',
    estado: 'PB',
  },
  {
    cidade: 'NATUBA',
    estado: 'PB',
  },
  {
    cidade: 'NAZAREZINHO',
    estado: 'PB',
  },
  {
    cidade: 'NOVA FLORESTA',
    estado: 'PB',
  },
  {
    cidade: 'NOVA OLINDA',
    estado: 'PB',
  },
  {
    cidade: 'NOVA PALMEIRA',
    estado: 'PB',
  },
  {
    cidade: "OLHO D'ÁGUA",
    estado: 'PB',
  },
  {
    cidade: 'OLIVEDOS',
    estado: 'PB',
  },
  {
    cidade: 'OURO VELHO',
    estado: 'PB',
  },
  {
    cidade: 'PARARI',
    estado: 'PB',
  },
  {
    cidade: 'PASSAGEM',
    estado: 'PB',
  },
  {
    cidade: 'PATOS',
    estado: 'PB',
  },
  {
    cidade: 'PAULISTA',
    estado: 'PB',
  },
  {
    cidade: 'PEDRA BRANCA',
    estado: 'PB',
  },
  {
    cidade: 'PEDRA LAVRADA',
    estado: 'PB',
  },
  {
    cidade: 'PEDRAS DE FOGO',
    estado: 'PB',
  },
  {
    cidade: 'PIANCÓ',
    estado: 'PB',
  },
  {
    cidade: 'PICUÍ',
    estado: 'PB',
  },
  {
    cidade: 'PILAR',
    estado: 'PB',
  },
  {
    cidade: 'PILÕES',
    estado: 'PB',
  },
  {
    cidade: 'PILÕEZINHOS',
    estado: 'PB',
  },
  {
    cidade: 'PIRPIRITUBA',
    estado: 'PB',
  },
  {
    cidade: 'PITIMBU',
    estado: 'PB',
  },
  {
    cidade: 'POCINHOS',
    estado: 'PB',
  },
  {
    cidade: 'POÇO DANTAS',
    estado: 'PB',
  },
  {
    cidade: 'POÇO DE JOSÉ DE MOURA',
    estado: 'PB',
  },
  {
    cidade: 'POMBAL',
    estado: 'PB',
  },
  {
    cidade: 'PRATA',
    estado: 'PB',
  },
  {
    cidade: 'PRINCESA ISABEL',
    estado: 'PB',
  },
  {
    cidade: 'PUXINANÃ',
    estado: 'PB',
  },
  {
    cidade: 'QUEIMADAS',
    estado: 'PB',
  },
  {
    cidade: 'QUIXABA',
    estado: 'PB',
  },
  {
    cidade: 'REMÍGIO',
    estado: 'PB',
  },
  {
    cidade: 'PEDRO RÉGIS',
    estado: 'PB',
  },
  {
    cidade: 'RIACHÃO',
    estado: 'PB',
  },
  {
    cidade: 'RIACHÃO DO BACAMARTE',
    estado: 'PB',
  },
  {
    cidade: 'RIACHÃO DO POÇO',
    estado: 'PB',
  },
  {
    cidade: 'RIACHO DE SANTO ANTÔNIO',
    estado: 'PB',
  },
  {
    cidade: 'RIACHO DOS CAVALOS',
    estado: 'PB',
  },
  {
    cidade: 'RIO TINTO',
    estado: 'PB',
  },
  {
    cidade: 'SALGADINHO',
    estado: 'PB',
  },
  {
    cidade: 'SALGADO DE SÃO FÉLIX',
    estado: 'PB',
  },
  {
    cidade: 'SANTA CECÍLIA',
    estado: 'PB',
  },
  {
    cidade: 'SANTA CRUZ',
    estado: 'PB',
  },
  {
    cidade: 'SANTA HELENA',
    estado: 'PB',
  },
  {
    cidade: 'SANTA INÊS',
    estado: 'PB',
  },
  {
    cidade: 'SANTA LUZIA',
    estado: 'PB',
  },
  {
    cidade: 'SANTANA DE MANGUEIRA',
    estado: 'PB',
  },
  {
    cidade: 'SANTANA DOS GARROTES',
    estado: 'PB',
  },
  {
    cidade: 'JOCA CLAUDINO',
    estado: 'PB',
  },
  {
    cidade: 'SANTA RITA',
    estado: 'PB',
  },
  {
    cidade: 'SANTA TERESINHA',
    estado: 'PB',
  },
  {
    cidade: 'SANTO ANDRÉ',
    estado: 'PB',
  },
  {
    cidade: 'SÃO BENTO',
    estado: 'PB',
  },
  {
    cidade: 'SÃO BENTINHO',
    estado: 'PB',
  },
  {
    cidade: 'SÃO DOMINGOS DO CARIRI',
    estado: 'PB',
  },
  {
    cidade: 'SÃO DOMINGOS',
    estado: 'PB',
  },
  {
    cidade: 'SÃO FRANCISCO',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOÃO DO CARIRI',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOÃO DO TIGRE',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DA LAGOA TAPADA',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DE CAIANA',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DE ESPINHARAS',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DOS RAMOS',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DE PIRANHAS',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DE PRINCESA',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DO BONFIM',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DO BREJO DO CRUZ',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DO SABUGI',
    estado: 'PB',
  },
  {
    cidade: 'SÃO JOSÉ DOS CORDEIROS',
    estado: 'PB',
  },
  {
    cidade: 'SÃO MAMEDE',
    estado: 'PB',
  },
  {
    cidade: 'SÃO MIGUEL DE TAIPU',
    estado: 'PB',
  },
  {
    cidade: 'SÃO SEBASTIÃO DE LAGOA DE ROÇA',
    estado: 'PB',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO UMBUZEIRO',
    estado: 'PB',
  },
  {
    cidade: 'SAPÉ',
    estado: 'PB',
  },
  {
    cidade: 'SÃO VICENTE DO SERIDÓ',
    estado: 'PB',
  },
  {
    cidade: 'SERRA BRANCA',
    estado: 'PB',
  },
  {
    cidade: 'SERRA DA RAIZ',
    estado: 'PB',
  },
  {
    cidade: 'SERRA GRANDE',
    estado: 'PB',
  },
  {
    cidade: 'SERRA REDONDA',
    estado: 'PB',
  },
  {
    cidade: 'SERRARIA',
    estado: 'PB',
  },
  {
    cidade: 'SERTÃOZINHO',
    estado: 'PB',
  },
  {
    cidade: 'SOBRADO',
    estado: 'PB',
  },
  {
    cidade: 'SOLÂNEA',
    estado: 'PB',
  },
  {
    cidade: 'SOLEDADE',
    estado: 'PB',
  },
  {
    cidade: 'SOSSÊGO',
    estado: 'PB',
  },
  {
    cidade: 'SOUSA',
    estado: 'PB',
  },
  {
    cidade: 'SUMÉ',
    estado: 'PB',
  },
  {
    cidade: 'TACIMA',
    estado: 'PB',
  },
  {
    cidade: 'TAPEROÁ',
    estado: 'PB',
  },
  {
    cidade: 'TAVARES',
    estado: 'PB',
  },
  {
    cidade: 'TEIXEIRA',
    estado: 'PB',
  },
  {
    cidade: 'TENÓRIO',
    estado: 'PB',
  },
  {
    cidade: 'TRIUNFO',
    estado: 'PB',
  },
  {
    cidade: 'UIRAÚNA',
    estado: 'PB',
  },
  {
    cidade: 'UMBUZEIRO',
    estado: 'PB',
  },
  {
    cidade: 'VÁRZEA',
    estado: 'PB',
  },
  {
    cidade: 'VIEIRÓPOLIS',
    estado: 'PB',
  },
  {
    cidade: 'ZABELÊ',
    estado: 'PB',
  },
  {
    cidade: 'ABREU E LIMA',
    estado: 'PE',
  },
  {
    cidade: 'AFOGADOS DA INGAZEIRA',
    estado: 'PE',
  },
  {
    cidade: 'AFRÂNIO',
    estado: 'PE',
  },
  {
    cidade: 'AGRESTINA',
    estado: 'PE',
  },
  {
    cidade: 'ÁGUA PRETA',
    estado: 'PE',
  },
  {
    cidade: 'ÁGUAS BELAS',
    estado: 'PE',
  },
  {
    cidade: 'ALAGOINHA',
    estado: 'PE',
  },
  {
    cidade: 'ALIANÇA',
    estado: 'PE',
  },
  {
    cidade: 'ALTINHO',
    estado: 'PE',
  },
  {
    cidade: 'AMARAJI',
    estado: 'PE',
  },
  {
    cidade: 'ANGELIM',
    estado: 'PE',
  },
  {
    cidade: 'ARAÇOIABA',
    estado: 'PE',
  },
  {
    cidade: 'ARARIPINA',
    estado: 'PE',
  },
  {
    cidade: 'ARCOVERDE',
    estado: 'PE',
  },
  {
    cidade: 'BARRA DE GUABIRABA',
    estado: 'PE',
  },
  {
    cidade: 'BARREIROS',
    estado: 'PE',
  },
  {
    cidade: 'BELÉM DE MARIA',
    estado: 'PE',
  },
  {
    cidade: 'BELÉM DO SÃO FRANCISCO',
    estado: 'PE',
  },
  {
    cidade: 'BELO JARDIM',
    estado: 'PE',
  },
  {
    cidade: 'BETÂNIA',
    estado: 'PE',
  },
  {
    cidade: 'BEZERROS',
    estado: 'PE',
  },
  {
    cidade: 'BODOCÓ',
    estado: 'PE',
  },
  {
    cidade: 'BOM CONSELHO',
    estado: 'PE',
  },
  {
    cidade: 'BOM JARDIM',
    estado: 'PE',
  },
  {
    cidade: 'BONITO',
    estado: 'PE',
  },
  {
    cidade: 'BREJÃO',
    estado: 'PE',
  },
  {
    cidade: 'BREJINHO',
    estado: 'PE',
  },
  {
    cidade: 'BREJO DA MADRE DE DEUS',
    estado: 'PE',
  },
  {
    cidade: 'BUENOS AIRES',
    estado: 'PE',
  },
  {
    cidade: 'BUÍQUE',
    estado: 'PE',
  },
  {
    cidade: 'CABO DE SANTO AGOSTINHO',
    estado: 'PE',
  },
  {
    cidade: 'CABROBÓ',
    estado: 'PE',
  },
  {
    cidade: 'CACHOEIRINHA',
    estado: 'PE',
  },
  {
    cidade: 'CAETÉS',
    estado: 'PE',
  },
  {
    cidade: 'CALÇADO',
    estado: 'PE',
  },
  {
    cidade: 'CALUMBI',
    estado: 'PE',
  },
  {
    cidade: 'CAMARAGIBE',
    estado: 'PE',
  },
  {
    cidade: 'CAMOCIM DE SÃO FÉLIX',
    estado: 'PE',
  },
  {
    cidade: 'CAMUTANGA',
    estado: 'PE',
  },
  {
    cidade: 'CANHOTINHO',
    estado: 'PE',
  },
  {
    cidade: 'CAPOEIRAS',
    estado: 'PE',
  },
  {
    cidade: 'CARNAÍBA',
    estado: 'PE',
  },
  {
    cidade: 'CARNAUBEIRA DA PENHA',
    estado: 'PE',
  },
  {
    cidade: 'CARPINA',
    estado: 'PE',
  },
  {
    cidade: 'CARUARU',
    estado: 'PE',
  },
  {
    cidade: 'CASINHAS',
    estado: 'PE',
  },
  {
    cidade: 'CATENDE',
    estado: 'PE',
  },
  {
    cidade: 'CEDRO',
    estado: 'PE',
  },
  {
    cidade: 'CHÃ DE ALEGRIA',
    estado: 'PE',
  },
  {
    cidade: 'CHÃ GRANDE',
    estado: 'PE',
  },
  {
    cidade: 'CONDADO',
    estado: 'PE',
  },
  {
    cidade: 'CORRENTES',
    estado: 'PE',
  },
  {
    cidade: 'CORTÊS',
    estado: 'PE',
  },
  {
    cidade: 'CUMARU',
    estado: 'PE',
  },
  {
    cidade: 'CUPIRA',
    estado: 'PE',
  },
  {
    cidade: 'CUSTÓDIA',
    estado: 'PE',
  },
  {
    cidade: 'DORMENTES',
    estado: 'PE',
  },
  {
    cidade: 'ESCADA',
    estado: 'PE',
  },
  {
    cidade: 'EXU',
    estado: 'PE',
  },
  {
    cidade: 'FEIRA NOVA',
    estado: 'PE',
  },
  {
    cidade: 'FERNANDO DE NORONHA',
    estado: 'PE',
  },
  {
    cidade: 'FERREIROS',
    estado: 'PE',
  },
  {
    cidade: 'FLORES',
    estado: 'PE',
  },
  {
    cidade: 'FLORESTA',
    estado: 'PE',
  },
  {
    cidade: 'FREI MIGUELINHO',
    estado: 'PE',
  },
  {
    cidade: 'GAMELEIRA',
    estado: 'PE',
  },
  {
    cidade: 'GARANHUNS',
    estado: 'PE',
  },
  {
    cidade: 'GLÓRIA DO GOITÁ',
    estado: 'PE',
  },
  {
    cidade: 'GOIANA',
    estado: 'PE',
  },
  {
    cidade: 'GRANITO',
    estado: 'PE',
  },
  {
    cidade: 'GRAVATÁ',
    estado: 'PE',
  },
  {
    cidade: 'IATI',
    estado: 'PE',
  },
  {
    cidade: 'IBIMIRIM',
    estado: 'PE',
  },
  {
    cidade: 'IBIRAJUBA',
    estado: 'PE',
  },
  {
    cidade: 'IGARASSU',
    estado: 'PE',
  },
  {
    cidade: 'IGUARACY',
    estado: 'PE',
  },
  {
    cidade: 'INAJÁ',
    estado: 'PE',
  },
  {
    cidade: 'INGAZEIRA',
    estado: 'PE',
  },
  {
    cidade: 'IPOJUCA',
    estado: 'PE',
  },
  {
    cidade: 'IPUBI',
    estado: 'PE',
  },
  {
    cidade: 'ITACURUBA',
    estado: 'PE',
  },
  {
    cidade: 'ITAÍBA',
    estado: 'PE',
  },
  {
    cidade: 'ILHA DE ITAMARACÁ',
    estado: 'PE',
  },
  {
    cidade: 'ITAMBÉ',
    estado: 'PE',
  },
  {
    cidade: 'ITAPETIM',
    estado: 'PE',
  },
  {
    cidade: 'ITAPISSUMA',
    estado: 'PE',
  },
  {
    cidade: 'ITAQUITINGA',
    estado: 'PE',
  },
  {
    cidade: 'JABOATÃO DOS GUARARAPES',
    estado: 'PE',
  },
  {
    cidade: 'JAQUEIRA',
    estado: 'PE',
  },
  {
    cidade: 'JATAÚBA',
    estado: 'PE',
  },
  {
    cidade: 'JATOBÁ',
    estado: 'PE',
  },
  {
    cidade: 'JOÃO ALFREDO',
    estado: 'PE',
  },
  {
    cidade: 'JOAQUIM NABUCO',
    estado: 'PE',
  },
  {
    cidade: 'JUCATI',
    estado: 'PE',
  },
  {
    cidade: 'JUPI',
    estado: 'PE',
  },
  {
    cidade: 'JUREMA',
    estado: 'PE',
  },
  {
    cidade: 'LAGOA DO CARRO',
    estado: 'PE',
  },
  {
    cidade: 'LAGOA DE ITAENGA',
    estado: 'PE',
  },
  {
    cidade: 'LAGOA DO OURO',
    estado: 'PE',
  },
  {
    cidade: 'LAGOA DOS GATOS',
    estado: 'PE',
  },
  {
    cidade: 'LAGOA GRANDE',
    estado: 'PE',
  },
  {
    cidade: 'LAJEDO',
    estado: 'PE',
  },
  {
    cidade: 'LIMOEIRO',
    estado: 'PE',
  },
  {
    cidade: 'MACAPARANA',
    estado: 'PE',
  },
  {
    cidade: 'MACHADOS',
    estado: 'PE',
  },
  {
    cidade: 'MANARI',
    estado: 'PE',
  },
  {
    cidade: 'MARAIAL',
    estado: 'PE',
  },
  {
    cidade: 'MIRANDIBA',
    estado: 'PE',
  },
  {
    cidade: 'MORENO',
    estado: 'PE',
  },
  {
    cidade: 'NAZARÉ DA MATA',
    estado: 'PE',
  },
  {
    cidade: 'OLINDA',
    estado: 'PE',
  },
  {
    cidade: 'OROBÓ',
    estado: 'PE',
  },
  {
    cidade: 'OROCÓ',
    estado: 'PE',
  },
  {
    cidade: 'OURICURI',
    estado: 'PE',
  },
  {
    cidade: 'PALMARES',
    estado: 'PE',
  },
  {
    cidade: 'PALMEIRINA',
    estado: 'PE',
  },
  {
    cidade: 'PANELAS',
    estado: 'PE',
  },
  {
    cidade: 'PARANATAMA',
    estado: 'PE',
  },
  {
    cidade: 'PARNAMIRIM',
    estado: 'PE',
  },
  {
    cidade: 'PASSIRA',
    estado: 'PE',
  },
  {
    cidade: 'PAUDALHO',
    estado: 'PE',
  },
  {
    cidade: 'PAULISTA',
    estado: 'PE',
  },
  {
    cidade: 'PEDRA',
    estado: 'PE',
  },
  {
    cidade: 'PESQUEIRA',
    estado: 'PE',
  },
  {
    cidade: 'PETROLÂNDIA',
    estado: 'PE',
  },
  {
    cidade: 'PETROLINA',
    estado: 'PE',
  },
  {
    cidade: 'POÇÃO',
    estado: 'PE',
  },
  {
    cidade: 'POMBOS',
    estado: 'PE',
  },
  {
    cidade: 'PRIMAVERA',
    estado: 'PE',
  },
  {
    cidade: 'QUIPAPÁ',
    estado: 'PE',
  },
  {
    cidade: 'QUIXABA',
    estado: 'PE',
  },
  {
    cidade: 'RECIFE',
    estado: 'PE',
  },
  {
    cidade: 'RIACHO DAS ALMAS',
    estado: 'PE',
  },
  {
    cidade: 'RIBEIRÃO',
    estado: 'PE',
  },
  {
    cidade: 'RIO FORMOSO',
    estado: 'PE',
  },
  {
    cidade: 'SAIRÉ',
    estado: 'PE',
  },
  {
    cidade: 'SALGADINHO',
    estado: 'PE',
  },
  {
    cidade: 'SALGUEIRO',
    estado: 'PE',
  },
  {
    cidade: 'SALOÁ',
    estado: 'PE',
  },
  {
    cidade: 'SANHARÓ',
    estado: 'PE',
  },
  {
    cidade: 'SANTA CRUZ',
    estado: 'PE',
  },
  {
    cidade: 'SANTA CRUZ DA BAIXA VERDE',
    estado: 'PE',
  },
  {
    cidade: 'SANTA CRUZ DO CAPIBARIBE',
    estado: 'PE',
  },
  {
    cidade: 'SANTA FILOMENA',
    estado: 'PE',
  },
  {
    cidade: 'SANTA MARIA DA BOA VISTA',
    estado: 'PE',
  },
  {
    cidade: 'SANTA MARIA DO CAMBUCÁ',
    estado: 'PE',
  },
  {
    cidade: 'SANTA TEREZINHA',
    estado: 'PE',
  },
  {
    cidade: 'SÃO BENEDITO DO SUL',
    estado: 'PE',
  },
  {
    cidade: 'SÃO BENTO DO UNA',
    estado: 'PE',
  },
  {
    cidade: 'SÃO CAITANO',
    estado: 'PE',
  },
  {
    cidade: 'SÃO JOÃO',
    estado: 'PE',
  },
  {
    cidade: 'SÃO JOAQUIM DO MONTE',
    estado: 'PE',
  },
  {
    cidade: 'SÃO JOSÉ DA COROA GRANDE',
    estado: 'PE',
  },
  {
    cidade: 'SÃO JOSÉ DO BELMONTE',
    estado: 'PE',
  },
  {
    cidade: 'SÃO JOSÉ DO EGITO',
    estado: 'PE',
  },
  {
    cidade: 'SÃO LOURENÇO DA MATA',
    estado: 'PE',
  },
  {
    cidade: 'SÃO VICENTE FÉRRER',
    estado: 'PE',
  },
  {
    cidade: 'SERRA TALHADA',
    estado: 'PE',
  },
  {
    cidade: 'SERRITA',
    estado: 'PE',
  },
  {
    cidade: 'SERTÂNIA',
    estado: 'PE',
  },
  {
    cidade: 'SIRINHAÉM',
    estado: 'PE',
  },
  {
    cidade: 'MOREILÂNDIA',
    estado: 'PE',
  },
  {
    cidade: 'SOLIDÃO',
    estado: 'PE',
  },
  {
    cidade: 'SURUBIM',
    estado: 'PE',
  },
  {
    cidade: 'TABIRA',
    estado: 'PE',
  },
  {
    cidade: 'TACAIMBÓ',
    estado: 'PE',
  },
  {
    cidade: 'TACARATU',
    estado: 'PE',
  },
  {
    cidade: 'TAMANDARÉ',
    estado: 'PE',
  },
  {
    cidade: 'TAQUARITINGA DO NORTE',
    estado: 'PE',
  },
  {
    cidade: 'TEREZINHA',
    estado: 'PE',
  },
  {
    cidade: 'TERRA NOVA',
    estado: 'PE',
  },
  {
    cidade: 'TIMBAÚBA',
    estado: 'PE',
  },
  {
    cidade: 'TORITAMA',
    estado: 'PE',
  },
  {
    cidade: 'TRACUNHAÉM',
    estado: 'PE',
  },
  {
    cidade: 'TRINDADE',
    estado: 'PE',
  },
  {
    cidade: 'TRIUNFO',
    estado: 'PE',
  },
  {
    cidade: 'TUPANATINGA',
    estado: 'PE',
  },
  {
    cidade: 'TUPARETAMA',
    estado: 'PE',
  },
  {
    cidade: 'VENTUROSA',
    estado: 'PE',
  },
  {
    cidade: 'VERDEJANTE',
    estado: 'PE',
  },
  {
    cidade: 'VERTENTE DO LÉRIO',
    estado: 'PE',
  },
  {
    cidade: 'VERTENTES',
    estado: 'PE',
  },
  {
    cidade: 'VICÊNCIA',
    estado: 'PE',
  },
  {
    cidade: 'VITÓRIA DE SANTO ANTÃO',
    estado: 'PE',
  },
  {
    cidade: 'XEXÉU',
    estado: 'PE',
  },
  {
    cidade: 'ÁGUA BRANCA',
    estado: 'AL',
  },
  {
    cidade: 'ANADIA',
    estado: 'AL',
  },
  {
    cidade: 'ARAPIRACA',
    estado: 'AL',
  },
  {
    cidade: 'ATALAIA',
    estado: 'AL',
  },
  {
    cidade: 'BARRA DE SANTO ANTÔNIO',
    estado: 'AL',
  },
  {
    cidade: 'BARRA DE SÃO MIGUEL',
    estado: 'AL',
  },
  {
    cidade: 'BATALHA',
    estado: 'AL',
  },
  {
    cidade: 'BELÉM',
    estado: 'AL',
  },
  {
    cidade: 'BELO MONTE',
    estado: 'AL',
  },
  {
    cidade: 'BOCA DA MATA',
    estado: 'AL',
  },
  {
    cidade: 'BRANQUINHA',
    estado: 'AL',
  },
  {
    cidade: 'CACIMBINHAS',
    estado: 'AL',
  },
  {
    cidade: 'CAJUEIRO',
    estado: 'AL',
  },
  {
    cidade: 'CAMPESTRE',
    estado: 'AL',
  },
  {
    cidade: 'CAMPO ALEGRE',
    estado: 'AL',
  },
  {
    cidade: 'CAMPO GRANDE',
    estado: 'AL',
  },
  {
    cidade: 'CANAPI',
    estado: 'AL',
  },
  {
    cidade: 'CAPELA',
    estado: 'AL',
  },
  {
    cidade: 'CARNEIROS',
    estado: 'AL',
  },
  {
    cidade: 'CHÃ PRETA',
    estado: 'AL',
  },
  {
    cidade: 'COITÉ DO NÓIA',
    estado: 'AL',
  },
  {
    cidade: 'COLÔNIA LEOPOLDINA',
    estado: 'AL',
  },
  {
    cidade: 'COQUEIRO SECO',
    estado: 'AL',
  },
  {
    cidade: 'CORURIPE',
    estado: 'AL',
  },
  {
    cidade: 'CRAÍBAS',
    estado: 'AL',
  },
  {
    cidade: 'DELMIRO GOUVEIA',
    estado: 'AL',
  },
  {
    cidade: 'DOIS RIACHOS',
    estado: 'AL',
  },
  {
    cidade: 'ESTRELA DE ALAGOAS',
    estado: 'AL',
  },
  {
    cidade: 'FEIRA GRANDE',
    estado: 'AL',
  },
  {
    cidade: 'FELIZ DESERTO',
    estado: 'AL',
  },
  {
    cidade: 'FLEXEIRAS',
    estado: 'AL',
  },
  {
    cidade: 'GIRAU DO PONCIANO',
    estado: 'AL',
  },
  {
    cidade: 'IBATEGUARA',
    estado: 'AL',
  },
  {
    cidade: 'IGACI',
    estado: 'AL',
  },
  {
    cidade: 'IGREJA NOVA',
    estado: 'AL',
  },
  {
    cidade: 'INHAPI',
    estado: 'AL',
  },
  {
    cidade: 'JACARÉ DOS HOMENS',
    estado: 'AL',
  },
  {
    cidade: 'JACUÍPE',
    estado: 'AL',
  },
  {
    cidade: 'JAPARATINGA',
    estado: 'AL',
  },
  {
    cidade: 'JARAMATAIA',
    estado: 'AL',
  },
  {
    cidade: 'JEQUIÁ DA PRAIA',
    estado: 'AL',
  },
  {
    cidade: 'JOAQUIM GOMES',
    estado: 'AL',
  },
  {
    cidade: 'JUNDIÁ',
    estado: 'AL',
  },
  {
    cidade: 'JUNQUEIRO',
    estado: 'AL',
  },
  {
    cidade: 'LAGOA DA CANOA',
    estado: 'AL',
  },
  {
    cidade: 'LIMOEIRO DE ANADIA',
    estado: 'AL',
  },
  {
    cidade: 'MACEIÓ',
    estado: 'AL',
  },
  {
    cidade: 'MAJOR ISIDORO',
    estado: 'AL',
  },
  {
    cidade: 'MARAGOGI',
    estado: 'AL',
  },
  {
    cidade: 'MARAVILHA',
    estado: 'AL',
  },
  {
    cidade: 'MARECHAL DEODORO',
    estado: 'AL',
  },
  {
    cidade: 'MARIBONDO',
    estado: 'AL',
  },
  {
    cidade: 'MAR VERMELHO',
    estado: 'AL',
  },
  {
    cidade: 'MATA GRANDE',
    estado: 'AL',
  },
  {
    cidade: 'MATRIZ DE CAMARAGIBE',
    estado: 'AL',
  },
  {
    cidade: 'MESSIAS',
    estado: 'AL',
  },
  {
    cidade: 'MINADOR DO NEGRÃO',
    estado: 'AL',
  },
  {
    cidade: 'MONTEIRÓPOLIS',
    estado: 'AL',
  },
  {
    cidade: 'MURICI',
    estado: 'AL',
  },
  {
    cidade: 'NOVO LINO',
    estado: 'AL',
  },
  {
    cidade: "OLHO D'ÁGUA DAS FLORES",
    estado: 'AL',
  },
  {
    cidade: "OLHO D'ÁGUA DO CASADO",
    estado: 'AL',
  },
  {
    cidade: "OLHO D'ÁGUA GRANDE",
    estado: 'AL',
  },
  {
    cidade: 'OLIVENÇA',
    estado: 'AL',
  },
  {
    cidade: 'OURO BRANCO',
    estado: 'AL',
  },
  {
    cidade: 'PALESTINA',
    estado: 'AL',
  },
  {
    cidade: 'PALMEIRA DOS ÍNDIOS',
    estado: 'AL',
  },
  {
    cidade: 'PÃO DE AÇÚCAR',
    estado: 'AL',
  },
  {
    cidade: 'PARICONHA',
    estado: 'AL',
  },
  {
    cidade: 'PARIPUEIRA',
    estado: 'AL',
  },
  {
    cidade: 'PASSO DE CAMARAGIBE',
    estado: 'AL',
  },
  {
    cidade: 'PAULO JACINTO',
    estado: 'AL',
  },
  {
    cidade: 'PENEDO',
    estado: 'AL',
  },
  {
    cidade: 'PIAÇABUÇU',
    estado: 'AL',
  },
  {
    cidade: 'PILAR',
    estado: 'AL',
  },
  {
    cidade: 'PINDOBA',
    estado: 'AL',
  },
  {
    cidade: 'PIRANHAS',
    estado: 'AL',
  },
  {
    cidade: 'POÇO DAS TRINCHEIRAS',
    estado: 'AL',
  },
  {
    cidade: 'PORTO CALVO',
    estado: 'AL',
  },
  {
    cidade: 'PORTO DE PEDRAS',
    estado: 'AL',
  },
  {
    cidade: 'PORTO REAL DO COLÉGIO',
    estado: 'AL',
  },
  {
    cidade: 'QUEBRANGULO',
    estado: 'AL',
  },
  {
    cidade: 'RIO LARGO',
    estado: 'AL',
  },
  {
    cidade: 'ROTEIRO',
    estado: 'AL',
  },
  {
    cidade: 'SANTA LUZIA DO NORTE',
    estado: 'AL',
  },
  {
    cidade: 'SANTANA DO IPANEMA',
    estado: 'AL',
  },
  {
    cidade: 'SANTANA DO MUNDAÚ',
    estado: 'AL',
  },
  {
    cidade: 'SÃO BRÁS',
    estado: 'AL',
  },
  {
    cidade: 'SÃO JOSÉ DA LAJE',
    estado: 'AL',
  },
  {
    cidade: 'SÃO JOSÉ DA TAPERA',
    estado: 'AL',
  },
  {
    cidade: 'SÃO LUÍS DO QUITUNDE',
    estado: 'AL',
  },
  {
    cidade: 'SÃO MIGUEL DOS CAMPOS',
    estado: 'AL',
  },
  {
    cidade: 'SÃO MIGUEL DOS MILAGRES',
    estado: 'AL',
  },
  {
    cidade: 'SÃO SEBASTIÃO',
    estado: 'AL',
  },
  {
    cidade: 'SATUBA',
    estado: 'AL',
  },
  {
    cidade: 'SENADOR RUI PALMEIRA',
    estado: 'AL',
  },
  {
    cidade: "TANQUE D'ARCA",
    estado: 'AL',
  },
  {
    cidade: 'TAQUARANA',
    estado: 'AL',
  },
  {
    cidade: 'TEOTÔNIO VILELA',
    estado: 'AL',
  },
  {
    cidade: 'TRAIPU',
    estado: 'AL',
  },
  {
    cidade: 'UNIÃO DOS PALMARES',
    estado: 'AL',
  },
  {
    cidade: 'VIÇOSA',
    estado: 'AL',
  },
  {
    cidade: 'AMPARO DO SÃO FRANCISCO',
    estado: 'SE',
  },
  {
    cidade: 'AQUIDABÃ',
    estado: 'SE',
  },
  {
    cidade: 'ARACAJU',
    estado: 'SE',
  },
  {
    cidade: 'ARAUÁ',
    estado: 'SE',
  },
  {
    cidade: 'AREIA BRANCA',
    estado: 'SE',
  },
  {
    cidade: 'BARRA DOS COQUEIROS',
    estado: 'SE',
  },
  {
    cidade: 'BOQUIM',
    estado: 'SE',
  },
  {
    cidade: 'BREJO GRANDE',
    estado: 'SE',
  },
  {
    cidade: 'CAMPO DO BRITO',
    estado: 'SE',
  },
  {
    cidade: 'CANHOBA',
    estado: 'SE',
  },
  {
    cidade: 'CANINDÉ DE SÃO FRANCISCO',
    estado: 'SE',
  },
  {
    cidade: 'CAPELA',
    estado: 'SE',
  },
  {
    cidade: 'CARIRA',
    estado: 'SE',
  },
  {
    cidade: 'CARMÓPOLIS',
    estado: 'SE',
  },
  {
    cidade: 'CEDRO DE SÃO JOÃO',
    estado: 'SE',
  },
  {
    cidade: 'CRISTINÁPOLIS',
    estado: 'SE',
  },
  {
    cidade: 'CUMBE',
    estado: 'SE',
  },
  {
    cidade: 'DIVINA PASTORA',
    estado: 'SE',
  },
  {
    cidade: 'ESTÂNCIA',
    estado: 'SE',
  },
  {
    cidade: 'FEIRA NOVA',
    estado: 'SE',
  },
  {
    cidade: 'FREI PAULO',
    estado: 'SE',
  },
  {
    cidade: 'GARARU',
    estado: 'SE',
  },
  {
    cidade: 'GENERAL MAYNARD',
    estado: 'SE',
  },
  {
    cidade: 'GRACHO CARDOSO',
    estado: 'SE',
  },
  {
    cidade: 'ILHA DAS FLORES',
    estado: 'SE',
  },
  {
    cidade: 'INDIAROBA',
    estado: 'SE',
  },
  {
    cidade: 'ITABAIANA',
    estado: 'SE',
  },
  {
    cidade: 'ITABAIANINHA',
    estado: 'SE',
  },
  {
    cidade: 'ITABI',
    estado: 'SE',
  },
  {
    cidade: "ITAPORANGA D'AJUDA",
    estado: 'SE',
  },
  {
    cidade: 'JAPARATUBA',
    estado: 'SE',
  },
  {
    cidade: 'JAPOATÃ',
    estado: 'SE',
  },
  {
    cidade: 'LAGARTO',
    estado: 'SE',
  },
  {
    cidade: 'LARANJEIRAS',
    estado: 'SE',
  },
  {
    cidade: 'MACAMBIRA',
    estado: 'SE',
  },
  {
    cidade: 'MALHADA DOS BOIS',
    estado: 'SE',
  },
  {
    cidade: 'MALHADOR',
    estado: 'SE',
  },
  {
    cidade: 'MARUIM',
    estado: 'SE',
  },
  {
    cidade: 'MOITA BONITA',
    estado: 'SE',
  },
  {
    cidade: 'MONTE ALEGRE DE SERGIPE',
    estado: 'SE',
  },
  {
    cidade: 'MURIBECA',
    estado: 'SE',
  },
  {
    cidade: 'NEÓPOLIS',
    estado: 'SE',
  },
  {
    cidade: 'NOSSA SENHORA APARECIDA',
    estado: 'SE',
  },
  {
    cidade: 'NOSSA SENHORA DA GLÓRIA',
    estado: 'SE',
  },
  {
    cidade: 'NOSSA SENHORA DAS DORES',
    estado: 'SE',
  },
  {
    cidade: 'NOSSA SENHORA DE LOURDES',
    estado: 'SE',
  },
  {
    cidade: 'NOSSA SENHORA DO SOCORRO',
    estado: 'SE',
  },
  {
    cidade: 'PACATUBA',
    estado: 'SE',
  },
  {
    cidade: 'PEDRA MOLE',
    estado: 'SE',
  },
  {
    cidade: 'PEDRINHAS',
    estado: 'SE',
  },
  {
    cidade: 'PINHÃO',
    estado: 'SE',
  },
  {
    cidade: 'PIRAMBU',
    estado: 'SE',
  },
  {
    cidade: 'POÇO REDONDO',
    estado: 'SE',
  },
  {
    cidade: 'POÇO VERDE',
    estado: 'SE',
  },
  {
    cidade: 'PORTO DA FOLHA',
    estado: 'SE',
  },
  {
    cidade: 'PROPRIÁ',
    estado: 'SE',
  },
  {
    cidade: 'RIACHÃO DO DANTAS',
    estado: 'SE',
  },
  {
    cidade: 'RIACHUELO',
    estado: 'SE',
  },
  {
    cidade: 'RIBEIRÓPOLIS',
    estado: 'SE',
  },
  {
    cidade: 'ROSÁRIO DO CATETE',
    estado: 'SE',
  },
  {
    cidade: 'SALGADO',
    estado: 'SE',
  },
  {
    cidade: 'SANTA LUZIA DO ITANHY',
    estado: 'SE',
  },
  {
    cidade: 'SANTANA DO SÃO FRANCISCO',
    estado: 'SE',
  },
  {
    cidade: 'SANTA ROSA DE LIMA',
    estado: 'SE',
  },
  {
    cidade: 'SANTO AMARO DAS BROTAS',
    estado: 'SE',
  },
  {
    cidade: 'SÃO CRISTÓVÃO',
    estado: 'SE',
  },
  {
    cidade: 'SÃO DOMINGOS',
    estado: 'SE',
  },
  {
    cidade: 'SÃO FRANCISCO',
    estado: 'SE',
  },
  {
    cidade: 'SÃO MIGUEL DO ALEIXO',
    estado: 'SE',
  },
  {
    cidade: 'SIMÃO DIAS',
    estado: 'SE',
  },
  {
    cidade: 'SIRIRI',
    estado: 'SE',
  },
  {
    cidade: 'TELHA',
    estado: 'SE',
  },
  {
    cidade: 'TOBIAS BARRETO',
    estado: 'SE',
  },
  {
    cidade: 'TOMAR DO GERU',
    estado: 'SE',
  },
  {
    cidade: 'UMBAÚBA',
    estado: 'SE',
  },
  {
    cidade: 'ABAÍRA',
    estado: 'BA',
  },
  {
    cidade: 'ABARÉ',
    estado: 'BA',
  },
  {
    cidade: 'ACAJUTIBA',
    estado: 'BA',
  },
  {
    cidade: 'ADUSTINA',
    estado: 'BA',
  },
  {
    cidade: 'ÁGUA FRIA',
    estado: 'BA',
  },
  {
    cidade: 'ÉRICO CARDOSO',
    estado: 'BA',
  },
  {
    cidade: 'AIQUARA',
    estado: 'BA',
  },
  {
    cidade: 'ALAGOINHAS',
    estado: 'BA',
  },
  {
    cidade: 'ALCOBAÇA',
    estado: 'BA',
  },
  {
    cidade: 'ALMADINA',
    estado: 'BA',
  },
  {
    cidade: 'AMARGOSA',
    estado: 'BA',
  },
  {
    cidade: 'AMÉLIA RODRIGUES',
    estado: 'BA',
  },
  {
    cidade: 'AMÉRICA DOURADA',
    estado: 'BA',
  },
  {
    cidade: 'ANAGÉ',
    estado: 'BA',
  },
  {
    cidade: 'ANDARAÍ',
    estado: 'BA',
  },
  {
    cidade: 'ANDORINHA',
    estado: 'BA',
  },
  {
    cidade: 'ANGICAL',
    estado: 'BA',
  },
  {
    cidade: 'ANGUERA',
    estado: 'BA',
  },
  {
    cidade: 'ANTAS',
    estado: 'BA',
  },
  {
    cidade: 'ANTÔNIO CARDOSO',
    estado: 'BA',
  },
  {
    cidade: 'ANTÔNIO GONÇALVES',
    estado: 'BA',
  },
  {
    cidade: 'APORÁ',
    estado: 'BA',
  },
  {
    cidade: 'APUAREMA',
    estado: 'BA',
  },
  {
    cidade: 'ARACATU',
    estado: 'BA',
  },
  {
    cidade: 'ARAÇÁS',
    estado: 'BA',
  },
  {
    cidade: 'ARACI',
    estado: 'BA',
  },
  {
    cidade: 'ARAMARI',
    estado: 'BA',
  },
  {
    cidade: 'ARATACA',
    estado: 'BA',
  },
  {
    cidade: 'ARATUÍPE',
    estado: 'BA',
  },
  {
    cidade: 'AURELINO LEAL',
    estado: 'BA',
  },
  {
    cidade: 'BAIANÓPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'BAIXA GRANDE',
    estado: 'BA',
  },
  {
    cidade: 'BANZAÊ',
    estado: 'BA',
  },
  {
    cidade: 'BARRA',
    estado: 'BA',
  },
  {
    cidade: 'BARRA DA ESTIVA',
    estado: 'BA',
  },
  {
    cidade: 'BARRA DO CHOÇA',
    estado: 'BA',
  },
  {
    cidade: 'BARRA DO MENDES',
    estado: 'BA',
  },
  {
    cidade: 'BARRA DO ROCHA',
    estado: 'BA',
  },
  {
    cidade: 'BARREIRAS',
    estado: 'BA',
  },
  {
    cidade: 'BARRO ALTO',
    estado: 'BA',
  },
  {
    cidade: 'BARROCAS',
    estado: 'BA',
  },
  {
    cidade: 'BARRO PRETO',
    estado: 'BA',
  },
  {
    cidade: 'BELMONTE',
    estado: 'BA',
  },
  {
    cidade: 'BELO CAMPO',
    estado: 'BA',
  },
  {
    cidade: 'BIRITINGA',
    estado: 'BA',
  },
  {
    cidade: 'BOA NOVA',
    estado: 'BA',
  },
  {
    cidade: 'BOA VISTA DO TUPIM',
    estado: 'BA',
  },
  {
    cidade: 'BOM JESUS DA LAPA',
    estado: 'BA',
  },
  {
    cidade: 'BOM JESUS DA SERRA',
    estado: 'BA',
  },
  {
    cidade: 'BONINAL',
    estado: 'BA',
  },
  {
    cidade: 'BONITO',
    estado: 'BA',
  },
  {
    cidade: 'BOQUIRA',
    estado: 'BA',
  },
  {
    cidade: 'BOTUPORÃ',
    estado: 'BA',
  },
  {
    cidade: 'BREJÕES',
    estado: 'BA',
  },
  {
    cidade: 'BREJOLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'BROTAS DE MACAÚBAS',
    estado: 'BA',
  },
  {
    cidade: 'BRUMADO',
    estado: 'BA',
  },
  {
    cidade: 'BUERAREMA',
    estado: 'BA',
  },
  {
    cidade: 'BURITIRAMA',
    estado: 'BA',
  },
  {
    cidade: 'CAATIBA',
    estado: 'BA',
  },
  {
    cidade: 'CABACEIRAS DO PARAGUAÇU',
    estado: 'BA',
  },
  {
    cidade: 'CACHOEIRA',
    estado: 'BA',
  },
  {
    cidade: 'CACULÉ',
    estado: 'BA',
  },
  {
    cidade: 'CAÉM',
    estado: 'BA',
  },
  {
    cidade: 'CAETANOS',
    estado: 'BA',
  },
  {
    cidade: 'CAETITÉ',
    estado: 'BA',
  },
  {
    cidade: 'CAFARNAUM',
    estado: 'BA',
  },
  {
    cidade: 'CAIRU',
    estado: 'BA',
  },
  {
    cidade: 'CALDEIRÃO GRANDE',
    estado: 'BA',
  },
  {
    cidade: 'CAMACAN',
    estado: 'BA',
  },
  {
    cidade: 'CAMAÇARI',
    estado: 'BA',
  },
  {
    cidade: 'CAMAMU',
    estado: 'BA',
  },
  {
    cidade: 'CAMPO ALEGRE DE LOURDES',
    estado: 'BA',
  },
  {
    cidade: 'CAMPO FORMOSO',
    estado: 'BA',
  },
  {
    cidade: 'CANÁPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'CANARANA',
    estado: 'BA',
  },
  {
    cidade: 'CANAVIEIRAS',
    estado: 'BA',
  },
  {
    cidade: 'CANDEAL',
    estado: 'BA',
  },
  {
    cidade: 'CANDEIAS',
    estado: 'BA',
  },
  {
    cidade: 'CANDIBA',
    estado: 'BA',
  },
  {
    cidade: 'CÂNDIDO SALES',
    estado: 'BA',
  },
  {
    cidade: 'CANSANÇÃO',
    estado: 'BA',
  },
  {
    cidade: 'CANUDOS',
    estado: 'BA',
  },
  {
    cidade: 'CAPELA DO ALTO ALEGRE',
    estado: 'BA',
  },
  {
    cidade: 'CAPIM GROSSO',
    estado: 'BA',
  },
  {
    cidade: 'CARAÍBAS',
    estado: 'BA',
  },
  {
    cidade: 'CARAVELAS',
    estado: 'BA',
  },
  {
    cidade: 'CARDEAL DA SILVA',
    estado: 'BA',
  },
  {
    cidade: 'CARINHANHA',
    estado: 'BA',
  },
  {
    cidade: 'CASA NOVA',
    estado: 'BA',
  },
  {
    cidade: 'CASTRO ALVES',
    estado: 'BA',
  },
  {
    cidade: 'CATOLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'CATU',
    estado: 'BA',
  },
  {
    cidade: 'CATURAMA',
    estado: 'BA',
  },
  {
    cidade: 'CENTRAL',
    estado: 'BA',
  },
  {
    cidade: 'CHORROCHÓ',
    estado: 'BA',
  },
  {
    cidade: 'CÍCERO DANTAS',
    estado: 'BA',
  },
  {
    cidade: 'CIPÓ',
    estado: 'BA',
  },
  {
    cidade: 'COARACI',
    estado: 'BA',
  },
  {
    cidade: 'COCOS',
    estado: 'BA',
  },
  {
    cidade: 'CONCEIÇÃO DA FEIRA',
    estado: 'BA',
  },
  {
    cidade: 'CONCEIÇÃO DO ALMEIDA',
    estado: 'BA',
  },
  {
    cidade: 'CONCEIÇÃO DO COITÉ',
    estado: 'BA',
  },
  {
    cidade: 'CONCEIÇÃO DO JACUÍPE',
    estado: 'BA',
  },
  {
    cidade: 'CONDE',
    estado: 'BA',
  },
  {
    cidade: 'CONDEÚBA',
    estado: 'BA',
  },
  {
    cidade: 'CONTENDAS DO SINCORÁ',
    estado: 'BA',
  },
  {
    cidade: 'CORAÇÃO DE MARIA',
    estado: 'BA',
  },
  {
    cidade: 'CORDEIROS',
    estado: 'BA',
  },
  {
    cidade: 'CORIBE',
    estado: 'BA',
  },
  {
    cidade: 'CORONEL JOÃO SÁ',
    estado: 'BA',
  },
  {
    cidade: 'CORRENTINA',
    estado: 'BA',
  },
  {
    cidade: 'COTEGIPE',
    estado: 'BA',
  },
  {
    cidade: 'CRAVOLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'CRISÓPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'CRISTÓPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'CRUZ DAS ALMAS',
    estado: 'BA',
  },
  {
    cidade: 'CURAÇÁ',
    estado: 'BA',
  },
  {
    cidade: 'DÁRIO MEIRA',
    estado: 'BA',
  },
  {
    cidade: "DIAS D'ÁVILA",
    estado: 'BA',
  },
  {
    cidade: 'DOM BASÍLIO',
    estado: 'BA',
  },
  {
    cidade: 'DOM MACEDO COSTA',
    estado: 'BA',
  },
  {
    cidade: 'ELÍSIO MEDRADO',
    estado: 'BA',
  },
  {
    cidade: 'ENCRUZILHADA',
    estado: 'BA',
  },
  {
    cidade: 'ENTRE RIOS',
    estado: 'BA',
  },
  {
    cidade: 'ESPLANADA',
    estado: 'BA',
  },
  {
    cidade: 'EUCLIDES DA CUNHA',
    estado: 'BA',
  },
  {
    cidade: 'EUNÁPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'FÁTIMA',
    estado: 'BA',
  },
  {
    cidade: 'FEIRA DA MATA',
    estado: 'BA',
  },
  {
    cidade: 'FEIRA DE SANTANA',
    estado: 'BA',
  },
  {
    cidade: 'FILADÉLFIA',
    estado: 'BA',
  },
  {
    cidade: 'FIRMINO ALVES',
    estado: 'BA',
  },
  {
    cidade: 'FLORESTA AZUL',
    estado: 'BA',
  },
  {
    cidade: 'FORMOSA DO RIO PRETO',
    estado: 'BA',
  },
  {
    cidade: 'GANDU',
    estado: 'BA',
  },
  {
    cidade: 'GAVIÃO',
    estado: 'BA',
  },
  {
    cidade: 'GENTIO DO OURO',
    estado: 'BA',
  },
  {
    cidade: 'GLÓRIA',
    estado: 'BA',
  },
  {
    cidade: 'GONGOGI',
    estado: 'BA',
  },
  {
    cidade: 'GOVERNADOR MANGABEIRA',
    estado: 'BA',
  },
  {
    cidade: 'GUAJERU',
    estado: 'BA',
  },
  {
    cidade: 'GUANAMBI',
    estado: 'BA',
  },
  {
    cidade: 'GUARATINGA',
    estado: 'BA',
  },
  {
    cidade: 'HELIÓPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'IAÇU',
    estado: 'BA',
  },
  {
    cidade: 'IBIASSUCÊ',
    estado: 'BA',
  },
  {
    cidade: 'IBICARAÍ',
    estado: 'BA',
  },
  {
    cidade: 'IBICOARA',
    estado: 'BA',
  },
  {
    cidade: 'IBICUÍ',
    estado: 'BA',
  },
  {
    cidade: 'IBIPEBA',
    estado: 'BA',
  },
  {
    cidade: 'IBIPITANGA',
    estado: 'BA',
  },
  {
    cidade: 'IBIQUERA',
    estado: 'BA',
  },
  {
    cidade: 'IBIRAPITANGA',
    estado: 'BA',
  },
  {
    cidade: 'IBIRAPUÃ',
    estado: 'BA',
  },
  {
    cidade: 'IBIRATAIA',
    estado: 'BA',
  },
  {
    cidade: 'IBITIARA',
    estado: 'BA',
  },
  {
    cidade: 'IBITITÁ',
    estado: 'BA',
  },
  {
    cidade: 'IBOTIRAMA',
    estado: 'BA',
  },
  {
    cidade: 'ICHU',
    estado: 'BA',
  },
  {
    cidade: 'IGAPORÃ',
    estado: 'BA',
  },
  {
    cidade: 'IGRAPIÚNA',
    estado: 'BA',
  },
  {
    cidade: 'IGUAÍ',
    estado: 'BA',
  },
  {
    cidade: 'ILHÉUS',
    estado: 'BA',
  },
  {
    cidade: 'INHAMBUPE',
    estado: 'BA',
  },
  {
    cidade: 'IPECAETÁ',
    estado: 'BA',
  },
  {
    cidade: 'IPIAÚ',
    estado: 'BA',
  },
  {
    cidade: 'IPIRÁ',
    estado: 'BA',
  },
  {
    cidade: 'IPUPIARA',
    estado: 'BA',
  },
  {
    cidade: 'IRAJUBA',
    estado: 'BA',
  },
  {
    cidade: 'IRAMAIA',
    estado: 'BA',
  },
  {
    cidade: 'IRAQUARA',
    estado: 'BA',
  },
  {
    cidade: 'IRARÁ',
    estado: 'BA',
  },
  {
    cidade: 'IRECÊ',
    estado: 'BA',
  },
  {
    cidade: 'ITABELA',
    estado: 'BA',
  },
  {
    cidade: 'ITABERABA',
    estado: 'BA',
  },
  {
    cidade: 'ITABUNA',
    estado: 'BA',
  },
  {
    cidade: 'ITACARÉ',
    estado: 'BA',
  },
  {
    cidade: 'ITAETÉ',
    estado: 'BA',
  },
  {
    cidade: 'ITAGI',
    estado: 'BA',
  },
  {
    cidade: 'ITAGIBÁ',
    estado: 'BA',
  },
  {
    cidade: 'ITAGIMIRIM',
    estado: 'BA',
  },
  {
    cidade: 'ITAGUAÇU DA BAHIA',
    estado: 'BA',
  },
  {
    cidade: 'ITAJU DO COLÔNIA',
    estado: 'BA',
  },
  {
    cidade: 'ITAJUÍPE',
    estado: 'BA',
  },
  {
    cidade: 'ITAMARAJU',
    estado: 'BA',
  },
  {
    cidade: 'ITAMARI',
    estado: 'BA',
  },
  {
    cidade: 'ITAMBÉ',
    estado: 'BA',
  },
  {
    cidade: 'ITANAGRA',
    estado: 'BA',
  },
  {
    cidade: 'ITANHÉM',
    estado: 'BA',
  },
  {
    cidade: 'ITAPARICA',
    estado: 'BA',
  },
  {
    cidade: 'ITAPÉ',
    estado: 'BA',
  },
  {
    cidade: 'ITAPEBI',
    estado: 'BA',
  },
  {
    cidade: 'ITAPETINGA',
    estado: 'BA',
  },
  {
    cidade: 'ITAPICURU',
    estado: 'BA',
  },
  {
    cidade: 'ITAPITANGA',
    estado: 'BA',
  },
  {
    cidade: 'ITAQUARA',
    estado: 'BA',
  },
  {
    cidade: 'ITARANTIM',
    estado: 'BA',
  },
  {
    cidade: 'ITATIM',
    estado: 'BA',
  },
  {
    cidade: 'ITIRUÇU',
    estado: 'BA',
  },
  {
    cidade: 'ITIÚBA',
    estado: 'BA',
  },
  {
    cidade: 'ITORORÓ',
    estado: 'BA',
  },
  {
    cidade: 'ITUAÇU',
    estado: 'BA',
  },
  {
    cidade: 'ITUBERÁ',
    estado: 'BA',
  },
  {
    cidade: 'IUIU',
    estado: 'BA',
  },
  {
    cidade: 'JABORANDI',
    estado: 'BA',
  },
  {
    cidade: 'JACARACI',
    estado: 'BA',
  },
  {
    cidade: 'JACOBINA',
    estado: 'BA',
  },
  {
    cidade: 'JAGUAQUARA',
    estado: 'BA',
  },
  {
    cidade: 'JAGUARARI',
    estado: 'BA',
  },
  {
    cidade: 'JAGUARIPE',
    estado: 'BA',
  },
  {
    cidade: 'JANDAÍRA',
    estado: 'BA',
  },
  {
    cidade: 'JEQUIÉ',
    estado: 'BA',
  },
  {
    cidade: 'JEREMOABO',
    estado: 'BA',
  },
  {
    cidade: 'JIQUIRIÇÁ',
    estado: 'BA',
  },
  {
    cidade: 'JITAÚNA',
    estado: 'BA',
  },
  {
    cidade: 'JOÃO DOURADO',
    estado: 'BA',
  },
  {
    cidade: 'JUAZEIRO',
    estado: 'BA',
  },
  {
    cidade: 'JUCURUÇU',
    estado: 'BA',
  },
  {
    cidade: 'JUSSARA',
    estado: 'BA',
  },
  {
    cidade: 'JUSSARI',
    estado: 'BA',
  },
  {
    cidade: 'JUSSIAPE',
    estado: 'BA',
  },
  {
    cidade: 'LAFAIETE COUTINHO',
    estado: 'BA',
  },
  {
    cidade: 'LAGOA REAL',
    estado: 'BA',
  },
  {
    cidade: 'LAJE',
    estado: 'BA',
  },
  {
    cidade: 'LAJEDÃO',
    estado: 'BA',
  },
  {
    cidade: 'LAJEDINHO',
    estado: 'BA',
  },
  {
    cidade: 'LAJEDO DO TABOCAL',
    estado: 'BA',
  },
  {
    cidade: 'LAMARÃO',
    estado: 'BA',
  },
  {
    cidade: 'LAPÃO',
    estado: 'BA',
  },
  {
    cidade: 'LAURO DE FREITAS',
    estado: 'BA',
  },
  {
    cidade: 'LENÇÓIS',
    estado: 'BA',
  },
  {
    cidade: 'LICÍNIO DE ALMEIDA',
    estado: 'BA',
  },
  {
    cidade: 'LIVRAMENTO DE NOSSA SENHORA',
    estado: 'BA',
  },
  {
    cidade: 'LUÍS EDUARDO MAGALHÃES',
    estado: 'BA',
  },
  {
    cidade: 'MACAJUBA',
    estado: 'BA',
  },
  {
    cidade: 'MACARANI',
    estado: 'BA',
  },
  {
    cidade: 'MACAÚBAS',
    estado: 'BA',
  },
  {
    cidade: 'MACURURÉ',
    estado: 'BA',
  },
  {
    cidade: 'MADRE DE DEUS',
    estado: 'BA',
  },
  {
    cidade: 'MAETINGA',
    estado: 'BA',
  },
  {
    cidade: 'MAIQUINIQUE',
    estado: 'BA',
  },
  {
    cidade: 'MAIRI',
    estado: 'BA',
  },
  {
    cidade: 'MALHADA',
    estado: 'BA',
  },
  {
    cidade: 'MALHADA DE PEDRAS',
    estado: 'BA',
  },
  {
    cidade: 'MANOEL VITORINO',
    estado: 'BA',
  },
  {
    cidade: 'MANSIDÃO',
    estado: 'BA',
  },
  {
    cidade: 'MARACÁS',
    estado: 'BA',
  },
  {
    cidade: 'MARAGOGIPE',
    estado: 'BA',
  },
  {
    cidade: 'MARAÚ',
    estado: 'BA',
  },
  {
    cidade: 'MARCIONÍLIO SOUZA',
    estado: 'BA',
  },
  {
    cidade: 'MASCOTE',
    estado: 'BA',
  },
  {
    cidade: 'MATA DE SÃO JOÃO',
    estado: 'BA',
  },
  {
    cidade: 'MATINA',
    estado: 'BA',
  },
  {
    cidade: 'MEDEIROS NETO',
    estado: 'BA',
  },
  {
    cidade: 'MIGUEL CALMON',
    estado: 'BA',
  },
  {
    cidade: 'MILAGRES',
    estado: 'BA',
  },
  {
    cidade: 'MIRANGABA',
    estado: 'BA',
  },
  {
    cidade: 'MIRANTE',
    estado: 'BA',
  },
  {
    cidade: 'MONTE SANTO',
    estado: 'BA',
  },
  {
    cidade: 'MORPARÁ',
    estado: 'BA',
  },
  {
    cidade: 'MORRO DO CHAPÉU',
    estado: 'BA',
  },
  {
    cidade: 'MORTUGABA',
    estado: 'BA',
  },
  {
    cidade: 'MUCUGÊ',
    estado: 'BA',
  },
  {
    cidade: 'MUCURI',
    estado: 'BA',
  },
  {
    cidade: 'MULUNGU DO MORRO',
    estado: 'BA',
  },
  {
    cidade: 'MUNDO NOVO',
    estado: 'BA',
  },
  {
    cidade: 'MUNIZ FERREIRA',
    estado: 'BA',
  },
  {
    cidade: 'MUQUÉM DO SÃO FRANCISCO',
    estado: 'BA',
  },
  {
    cidade: 'MURITIBA',
    estado: 'BA',
  },
  {
    cidade: 'MUTUÍPE',
    estado: 'BA',
  },
  {
    cidade: 'NAZARÉ',
    estado: 'BA',
  },
  {
    cidade: 'NILO PEÇANHA',
    estado: 'BA',
  },
  {
    cidade: 'NORDESTINA',
    estado: 'BA',
  },
  {
    cidade: 'NOVA CANAÃ',
    estado: 'BA',
  },
  {
    cidade: 'NOVA FÁTIMA',
    estado: 'BA',
  },
  {
    cidade: 'NOVA IBIÁ',
    estado: 'BA',
  },
  {
    cidade: 'NOVA ITARANA',
    estado: 'BA',
  },
  {
    cidade: 'NOVA REDENÇÃO',
    estado: 'BA',
  },
  {
    cidade: 'NOVA SOURE',
    estado: 'BA',
  },
  {
    cidade: 'NOVA VIÇOSA',
    estado: 'BA',
  },
  {
    cidade: 'NOVO HORIZONTE',
    estado: 'BA',
  },
  {
    cidade: 'NOVO TRIUNFO',
    estado: 'BA',
  },
  {
    cidade: 'OLINDINA',
    estado: 'BA',
  },
  {
    cidade: 'OLIVEIRA DOS BREJINHOS',
    estado: 'BA',
  },
  {
    cidade: 'OURIÇANGAS',
    estado: 'BA',
  },
  {
    cidade: 'OUROLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'PALMAS DE MONTE ALTO',
    estado: 'BA',
  },
  {
    cidade: 'PALMEIRAS',
    estado: 'BA',
  },
  {
    cidade: 'PARAMIRIM',
    estado: 'BA',
  },
  {
    cidade: 'PARATINGA',
    estado: 'BA',
  },
  {
    cidade: 'PARIPIRANGA',
    estado: 'BA',
  },
  {
    cidade: 'PAU BRASIL',
    estado: 'BA',
  },
  {
    cidade: 'PAULO AFONSO',
    estado: 'BA',
  },
  {
    cidade: 'PÉ DE SERRA',
    estado: 'BA',
  },
  {
    cidade: 'PEDRÃO',
    estado: 'BA',
  },
  {
    cidade: 'PEDRO ALEXANDRE',
    estado: 'BA',
  },
  {
    cidade: 'PIATÃ',
    estado: 'BA',
  },
  {
    cidade: 'PILÃO ARCADO',
    estado: 'BA',
  },
  {
    cidade: 'PINDAÍ',
    estado: 'BA',
  },
  {
    cidade: 'PINDOBAÇU',
    estado: 'BA',
  },
  {
    cidade: 'PINTADAS',
    estado: 'BA',
  },
  {
    cidade: 'PIRAÍ DO NORTE',
    estado: 'BA',
  },
  {
    cidade: 'PIRIPÁ',
    estado: 'BA',
  },
  {
    cidade: 'PIRITIBA',
    estado: 'BA',
  },
  {
    cidade: 'PLANALTINO',
    estado: 'BA',
  },
  {
    cidade: 'PLANALTO',
    estado: 'BA',
  },
  {
    cidade: 'POÇÕES',
    estado: 'BA',
  },
  {
    cidade: 'POJUCA',
    estado: 'BA',
  },
  {
    cidade: 'PONTO NOVO',
    estado: 'BA',
  },
  {
    cidade: 'PORTO SEGURO',
    estado: 'BA',
  },
  {
    cidade: 'POTIRAGUÁ',
    estado: 'BA',
  },
  {
    cidade: 'PRADO',
    estado: 'BA',
  },
  {
    cidade: 'PRESIDENTE DUTRA',
    estado: 'BA',
  },
  {
    cidade: 'PRESIDENTE JÂNIO QUADROS',
    estado: 'BA',
  },
  {
    cidade: 'PRESIDENTE TANCREDO NEVES',
    estado: 'BA',
  },
  {
    cidade: 'QUEIMADAS',
    estado: 'BA',
  },
  {
    cidade: 'QUIJINGUE',
    estado: 'BA',
  },
  {
    cidade: 'QUIXABEIRA',
    estado: 'BA',
  },
  {
    cidade: 'RAFAEL JAMBEIRO',
    estado: 'BA',
  },
  {
    cidade: 'REMANSO',
    estado: 'BA',
  },
  {
    cidade: 'RETIROLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'RIACHÃO DAS NEVES',
    estado: 'BA',
  },
  {
    cidade: 'RIACHÃO DO JACUÍPE',
    estado: 'BA',
  },
  {
    cidade: 'RIACHO DE SANTANA',
    estado: 'BA',
  },
  {
    cidade: 'RIBEIRA DO AMPARO',
    estado: 'BA',
  },
  {
    cidade: 'RIBEIRA DO POMBAL',
    estado: 'BA',
  },
  {
    cidade: 'RIBEIRÃO DO LARGO',
    estado: 'BA',
  },
  {
    cidade: 'RIO DE CONTAS',
    estado: 'BA',
  },
  {
    cidade: 'RIO DO ANTÔNIO',
    estado: 'BA',
  },
  {
    cidade: 'RIO DO PIRES',
    estado: 'BA',
  },
  {
    cidade: 'RIO REAL',
    estado: 'BA',
  },
  {
    cidade: 'RODELAS',
    estado: 'BA',
  },
  {
    cidade: 'RUY BARBOSA',
    estado: 'BA',
  },
  {
    cidade: 'SALINAS DA MARGARIDA',
    estado: 'BA',
  },
  {
    cidade: 'SALVADOR',
    estado: 'BA',
  },
  {
    cidade: 'SANTA BÁRBARA',
    estado: 'BA',
  },
  {
    cidade: 'SANTA BRÍGIDA',
    estado: 'BA',
  },
  {
    cidade: 'SANTA CRUZ CABRÁLIA',
    estado: 'BA',
  },
  {
    cidade: 'SANTA CRUZ DA VITÓRIA',
    estado: 'BA',
  },
  {
    cidade: 'SANTA INÊS',
    estado: 'BA',
  },
  {
    cidade: 'SANTALUZ',
    estado: 'BA',
  },
  {
    cidade: 'SANTA LUZIA',
    estado: 'BA',
  },
  {
    cidade: 'SANTA MARIA DA VITÓRIA',
    estado: 'BA',
  },
  {
    cidade: 'SANTANA',
    estado: 'BA',
  },
  {
    cidade: 'SANTANÓPOLIS',
    estado: 'BA',
  },
  {
    cidade: 'SANTA RITA DE CÁSSIA',
    estado: 'BA',
  },
  {
    cidade: 'SANTA TEREZINHA',
    estado: 'BA',
  },
  {
    cidade: 'SANTO AMARO',
    estado: 'BA',
  },
  {
    cidade: 'SANTO ANTÔNIO DE JESUS',
    estado: 'BA',
  },
  {
    cidade: 'SANTO ESTÊVÃO',
    estado: 'BA',
  },
  {
    cidade: 'SÃO DESIDÉRIO',
    estado: 'BA',
  },
  {
    cidade: 'SÃO DOMINGOS',
    estado: 'BA',
  },
  {
    cidade: 'SÃO FÉLIX',
    estado: 'BA',
  },
  {
    cidade: 'SÃO FÉLIX DO CORIBE',
    estado: 'BA',
  },
  {
    cidade: 'SÃO FELIPE',
    estado: 'BA',
  },
  {
    cidade: 'SÃO FRANCISCO DO CONDE',
    estado: 'BA',
  },
  {
    cidade: 'SÃO GABRIEL',
    estado: 'BA',
  },
  {
    cidade: 'SÃO GONÇALO DOS CAMPOS',
    estado: 'BA',
  },
  {
    cidade: 'SÃO JOSÉ DA VITÓRIA',
    estado: 'BA',
  },
  {
    cidade: 'SÃO JOSÉ DO JACUÍPE',
    estado: 'BA',
  },
  {
    cidade: 'SÃO MIGUEL DAS MATAS',
    estado: 'BA',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO PASSÉ',
    estado: 'BA',
  },
  {
    cidade: 'SAPEAÇU',
    estado: 'BA',
  },
  {
    cidade: 'SÁTIRO DIAS',
    estado: 'BA',
  },
  {
    cidade: 'SAUBARA',
    estado: 'BA',
  },
  {
    cidade: 'SAÚDE',
    estado: 'BA',
  },
  {
    cidade: 'SEABRA',
    estado: 'BA',
  },
  {
    cidade: 'SEBASTIÃO LARANJEIRAS',
    estado: 'BA',
  },
  {
    cidade: 'SENHOR DO BONFIM',
    estado: 'BA',
  },
  {
    cidade: 'SERRA DO RAMALHO',
    estado: 'BA',
  },
  {
    cidade: 'SENTO SÉ',
    estado: 'BA',
  },
  {
    cidade: 'SERRA DOURADA',
    estado: 'BA',
  },
  {
    cidade: 'SERRA PRETA',
    estado: 'BA',
  },
  {
    cidade: 'SERRINHA',
    estado: 'BA',
  },
  {
    cidade: 'SERROLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'SIMÕES FILHO',
    estado: 'BA',
  },
  {
    cidade: 'SÍTIO DO MATO',
    estado: 'BA',
  },
  {
    cidade: 'SÍTIO DO QUINTO',
    estado: 'BA',
  },
  {
    cidade: 'SOBRADINHO',
    estado: 'BA',
  },
  {
    cidade: 'SOUTO SOARES',
    estado: 'BA',
  },
  {
    cidade: 'TABOCAS DO BREJO VELHO',
    estado: 'BA',
  },
  {
    cidade: 'TANHAÇU',
    estado: 'BA',
  },
  {
    cidade: 'TANQUE NOVO',
    estado: 'BA',
  },
  {
    cidade: 'TANQUINHO',
    estado: 'BA',
  },
  {
    cidade: 'TAPEROÁ',
    estado: 'BA',
  },
  {
    cidade: 'TAPIRAMUTÁ',
    estado: 'BA',
  },
  {
    cidade: 'TEIXEIRA DE FREITAS',
    estado: 'BA',
  },
  {
    cidade: 'TEODORO SAMPAIO',
    estado: 'BA',
  },
  {
    cidade: 'TEOFILÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'TEOLÂNDIA',
    estado: 'BA',
  },
  {
    cidade: 'TERRA NOVA',
    estado: 'BA',
  },
  {
    cidade: 'TREMEDAL',
    estado: 'BA',
  },
  {
    cidade: 'TUCANO',
    estado: 'BA',
  },
  {
    cidade: 'UAUÁ',
    estado: 'BA',
  },
  {
    cidade: 'UBAÍRA',
    estado: 'BA',
  },
  {
    cidade: 'UBAITABA',
    estado: 'BA',
  },
  {
    cidade: 'UBATÃ',
    estado: 'BA',
  },
  {
    cidade: 'UIBAÍ',
    estado: 'BA',
  },
  {
    cidade: 'UMBURANAS',
    estado: 'BA',
  },
  {
    cidade: 'UNA',
    estado: 'BA',
  },
  {
    cidade: 'URANDI',
    estado: 'BA',
  },
  {
    cidade: 'URUÇUCA',
    estado: 'BA',
  },
  {
    cidade: 'UTINGA',
    estado: 'BA',
  },
  {
    cidade: 'VALENÇA',
    estado: 'BA',
  },
  {
    cidade: 'VALENTE',
    estado: 'BA',
  },
  {
    cidade: 'VÁRZEA DA ROÇA',
    estado: 'BA',
  },
  {
    cidade: 'VÁRZEA DO POÇO',
    estado: 'BA',
  },
  {
    cidade: 'VÁRZEA NOVA',
    estado: 'BA',
  },
  {
    cidade: 'VARZEDO',
    estado: 'BA',
  },
  {
    cidade: 'VERA CRUZ',
    estado: 'BA',
  },
  {
    cidade: 'VEREDA',
    estado: 'BA',
  },
  {
    cidade: 'VITÓRIA DA CONQUISTA',
    estado: 'BA',
  },
  {
    cidade: 'WAGNER',
    estado: 'BA',
  },
  {
    cidade: 'WANDERLEY',
    estado: 'BA',
  },
  {
    cidade: 'WENCESLAU GUIMARÃES',
    estado: 'BA',
  },
  {
    cidade: 'XIQUE-XIQUE',
    estado: 'BA',
  },
  {
    cidade: 'ABADIA DOS DOURADOS',
    estado: 'MG',
  },
  {
    cidade: 'ABAETÉ',
    estado: 'MG',
  },
  {
    cidade: 'ABRE CAMPO',
    estado: 'MG',
  },
  {
    cidade: 'ACAIACA',
    estado: 'MG',
  },
  {
    cidade: 'AÇUCENA',
    estado: 'MG',
  },
  {
    cidade: 'ÁGUA BOA',
    estado: 'MG',
  },
  {
    cidade: 'ÁGUA COMPRIDA',
    estado: 'MG',
  },
  {
    cidade: 'AGUANIL',
    estado: 'MG',
  },
  {
    cidade: 'ÁGUAS FORMOSAS',
    estado: 'MG',
  },
  {
    cidade: 'ÁGUAS VERMELHAS',
    estado: 'MG',
  },
  {
    cidade: 'AIMORÉS',
    estado: 'MG',
  },
  {
    cidade: 'AIURUOCA',
    estado: 'MG',
  },
  {
    cidade: 'ALAGOA',
    estado: 'MG',
  },
  {
    cidade: 'ALBERTINA',
    estado: 'MG',
  },
  {
    cidade: 'ALÉM PARAÍBA',
    estado: 'MG',
  },
  {
    cidade: 'ALFENAS',
    estado: 'MG',
  },
  {
    cidade: 'ALFREDO VASCONCELOS',
    estado: 'MG',
  },
  {
    cidade: 'ALMENARA',
    estado: 'MG',
  },
  {
    cidade: 'ALPERCATA',
    estado: 'MG',
  },
  {
    cidade: 'ALPINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'ALTEROSA',
    estado: 'MG',
  },
  {
    cidade: 'ALTO CAPARAÓ',
    estado: 'MG',
  },
  {
    cidade: 'ALTO RIO DOCE',
    estado: 'MG',
  },
  {
    cidade: 'ALVARENGA',
    estado: 'MG',
  },
  {
    cidade: 'ALVINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'ALVORADA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'AMPARO DO SERRA',
    estado: 'MG',
  },
  {
    cidade: 'ANDRADAS',
    estado: 'MG',
  },
  {
    cidade: 'CACHOEIRA DE PAJEÚ',
    estado: 'MG',
  },
  {
    cidade: 'ANDRELÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'ANGELÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'ANTÔNIO CARLOS',
    estado: 'MG',
  },
  {
    cidade: 'ANTÔNIO DIAS',
    estado: 'MG',
  },
  {
    cidade: 'ANTÔNIO PRADO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'ARAÇAÍ',
    estado: 'MG',
  },
  {
    cidade: 'ARACITABA',
    estado: 'MG',
  },
  {
    cidade: 'ARAÇUAÍ',
    estado: 'MG',
  },
  {
    cidade: 'ARAGUARI',
    estado: 'MG',
  },
  {
    cidade: 'ARANTINA',
    estado: 'MG',
  },
  {
    cidade: 'ARAPONGA',
    estado: 'MG',
  },
  {
    cidade: 'ARAPORÃ',
    estado: 'MG',
  },
  {
    cidade: 'ARAPUÁ',
    estado: 'MG',
  },
  {
    cidade: 'ARAÚJOS',
    estado: 'MG',
  },
  {
    cidade: 'ARAXÁ',
    estado: 'MG',
  },
  {
    cidade: 'ARCEBURGO',
    estado: 'MG',
  },
  {
    cidade: 'ARCOS',
    estado: 'MG',
  },
  {
    cidade: 'AREADO',
    estado: 'MG',
  },
  {
    cidade: 'ARGIRITA',
    estado: 'MG',
  },
  {
    cidade: 'ARICANDUVA',
    estado: 'MG',
  },
  {
    cidade: 'ARINOS',
    estado: 'MG',
  },
  {
    cidade: 'ASTOLFO DUTRA',
    estado: 'MG',
  },
  {
    cidade: 'ATALÉIA',
    estado: 'MG',
  },
  {
    cidade: 'AUGUSTO DE LIMA',
    estado: 'MG',
  },
  {
    cidade: 'BAEPENDI',
    estado: 'MG',
  },
  {
    cidade: 'BALDIM',
    estado: 'MG',
  },
  {
    cidade: 'BAMBUÍ',
    estado: 'MG',
  },
  {
    cidade: 'BANDEIRA',
    estado: 'MG',
  },
  {
    cidade: 'BANDEIRA DO SUL',
    estado: 'MG',
  },
  {
    cidade: 'BARÃO DE COCAIS',
    estado: 'MG',
  },
  {
    cidade: 'BARÃO DE MONTE ALTO',
    estado: 'MG',
  },
  {
    cidade: 'BARBACENA',
    estado: 'MG',
  },
  {
    cidade: 'BARRA LONGA',
    estado: 'MG',
  },
  {
    cidade: 'BARROSO',
    estado: 'MG',
  },
  {
    cidade: 'BELA VISTA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BELMIRO BRAGA',
    estado: 'MG',
  },
  {
    cidade: 'BELO HORIZONTE',
    estado: 'MG',
  },
  {
    cidade: 'BELO ORIENTE',
    estado: 'MG',
  },
  {
    cidade: 'BELO VALE',
    estado: 'MG',
  },
  {
    cidade: 'BERILO',
    estado: 'MG',
  },
  {
    cidade: 'BERTÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'BERIZAL',
    estado: 'MG',
  },
  {
    cidade: 'BETIM',
    estado: 'MG',
  },
  {
    cidade: 'BIAS FORTES',
    estado: 'MG',
  },
  {
    cidade: 'BICAS',
    estado: 'MG',
  },
  {
    cidade: 'BIQUINHAS',
    estado: 'MG',
  },
  {
    cidade: 'BOA ESPERANÇA',
    estado: 'MG',
  },
  {
    cidade: 'BOCAINA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BOCAIÚVA',
    estado: 'MG',
  },
  {
    cidade: 'BOM DESPACHO',
    estado: 'MG',
  },
  {
    cidade: 'BOM JARDIM DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BOM JESUS DA PENHA',
    estado: 'MG',
  },
  {
    cidade: 'BOM JESUS DO AMPARO',
    estado: 'MG',
  },
  {
    cidade: 'BOM JESUS DO GALHO',
    estado: 'MG',
  },
  {
    cidade: 'BOM REPOUSO',
    estado: 'MG',
  },
  {
    cidade: 'BOM SUCESSO',
    estado: 'MG',
  },
  {
    cidade: 'BONFIM',
    estado: 'MG',
  },
  {
    cidade: 'BONFINÓPOLIS DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BONITO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BORDA DA MATA',
    estado: 'MG',
  },
  {
    cidade: 'BOTELHOS',
    estado: 'MG',
  },
  {
    cidade: 'BOTUMIRIM',
    estado: 'MG',
  },
  {
    cidade: 'BRASILÂNDIA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BRASÍLIA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'BRÁS PIRES',
    estado: 'MG',
  },
  {
    cidade: 'BRAÚNAS',
    estado: 'MG',
  },
  {
    cidade: 'BRAZÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'BRUMADINHO',
    estado: 'MG',
  },
  {
    cidade: 'BUENO BRANDÃO',
    estado: 'MG',
  },
  {
    cidade: 'BUENÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'BUGRE',
    estado: 'MG',
  },
  {
    cidade: 'BURITIS',
    estado: 'MG',
  },
  {
    cidade: 'BURITIZEIRO',
    estado: 'MG',
  },
  {
    cidade: 'CABECEIRA GRANDE',
    estado: 'MG',
  },
  {
    cidade: 'CABO VERDE',
    estado: 'MG',
  },
  {
    cidade: 'CACHOEIRA DA PRATA',
    estado: 'MG',
  },
  {
    cidade: 'CACHOEIRA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'CACHOEIRA DOURADA',
    estado: 'MG',
  },
  {
    cidade: 'CAETANÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'CAETÉ',
    estado: 'MG',
  },
  {
    cidade: 'CAIANA',
    estado: 'MG',
  },
  {
    cidade: 'CAJURI',
    estado: 'MG',
  },
  {
    cidade: 'CALDAS',
    estado: 'MG',
  },
  {
    cidade: 'CAMACHO',
    estado: 'MG',
  },
  {
    cidade: 'CAMANDUCAIA',
    estado: 'MG',
  },
  {
    cidade: 'CAMBUÍ',
    estado: 'MG',
  },
  {
    cidade: 'CAMBUQUIRA',
    estado: 'MG',
  },
  {
    cidade: 'CAMPANÁRIO',
    estado: 'MG',
  },
  {
    cidade: 'CAMPANHA',
    estado: 'MG',
  },
  {
    cidade: 'CAMPESTRE',
    estado: 'MG',
  },
  {
    cidade: 'CAMPINA VERDE',
    estado: 'MG',
  },
  {
    cidade: 'CAMPO AZUL',
    estado: 'MG',
  },
  {
    cidade: 'CAMPO BELO',
    estado: 'MG',
  },
  {
    cidade: 'CAMPO DO MEIO',
    estado: 'MG',
  },
  {
    cidade: 'CAMPO FLORIDO',
    estado: 'MG',
  },
  {
    cidade: 'CAMPOS ALTOS',
    estado: 'MG',
  },
  {
    cidade: 'CAMPOS GERAIS',
    estado: 'MG',
  },
  {
    cidade: 'CANAÃ',
    estado: 'MG',
  },
  {
    cidade: 'CANÁPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'CANA VERDE',
    estado: 'MG',
  },
  {
    cidade: 'CANDEIAS',
    estado: 'MG',
  },
  {
    cidade: 'CANTAGALO',
    estado: 'MG',
  },
  {
    cidade: 'CAPARAÓ',
    estado: 'MG',
  },
  {
    cidade: 'CAPELA NOVA',
    estado: 'MG',
  },
  {
    cidade: 'CAPELINHA',
    estado: 'MG',
  },
  {
    cidade: 'CAPETINGA',
    estado: 'MG',
  },
  {
    cidade: 'CAPIM BRANCO',
    estado: 'MG',
  },
  {
    cidade: 'CAPINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'CAPITÃO ANDRADE',
    estado: 'MG',
  },
  {
    cidade: 'CAPITÃO ENÉAS',
    estado: 'MG',
  },
  {
    cidade: 'CAPITÓLIO',
    estado: 'MG',
  },
  {
    cidade: 'CAPUTIRA',
    estado: 'MG',
  },
  {
    cidade: 'CARAÍ',
    estado: 'MG',
  },
  {
    cidade: 'CARANAÍBA',
    estado: 'MG',
  },
  {
    cidade: 'CARANDAÍ',
    estado: 'MG',
  },
  {
    cidade: 'CARANGOLA',
    estado: 'MG',
  },
  {
    cidade: 'CARATINGA',
    estado: 'MG',
  },
  {
    cidade: 'CARBONITA',
    estado: 'MG',
  },
  {
    cidade: 'CAREAÇU',
    estado: 'MG',
  },
  {
    cidade: 'CARLOS CHAGAS',
    estado: 'MG',
  },
  {
    cidade: 'CARMÉSIA',
    estado: 'MG',
  },
  {
    cidade: 'CARMO DA CACHOEIRA',
    estado: 'MG',
  },
  {
    cidade: 'CARMO DA MATA',
    estado: 'MG',
  },
  {
    cidade: 'CARMO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'CARMO DO CAJURU',
    estado: 'MG',
  },
  {
    cidade: 'CARMO DO PARANAÍBA',
    estado: 'MG',
  },
  {
    cidade: 'CARMO DO RIO CLARO',
    estado: 'MG',
  },
  {
    cidade: 'CARMÓPOLIS DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'CARNEIRINHO',
    estado: 'MG',
  },
  {
    cidade: 'CARRANCAS',
    estado: 'MG',
  },
  {
    cidade: 'CARVALHÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'CARVALHOS',
    estado: 'MG',
  },
  {
    cidade: 'CASA GRANDE',
    estado: 'MG',
  },
  {
    cidade: 'CASCALHO RICO',
    estado: 'MG',
  },
  {
    cidade: 'CÁSSIA',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DA BARRA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'CATAGUASES',
    estado: 'MG',
  },
  {
    cidade: 'CATAS ALTAS',
    estado: 'MG',
  },
  {
    cidade: 'CATAS ALTAS DA NORUEGA',
    estado: 'MG',
  },
  {
    cidade: 'CATUJI',
    estado: 'MG',
  },
  {
    cidade: 'CATUTI',
    estado: 'MG',
  },
  {
    cidade: 'CAXAMBU',
    estado: 'MG',
  },
  {
    cidade: 'CEDRO DO ABAETÉ',
    estado: 'MG',
  },
  {
    cidade: 'CENTRAL DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'CENTRALINA',
    estado: 'MG',
  },
  {
    cidade: 'CHÁCARA',
    estado: 'MG',
  },
  {
    cidade: 'CHALÉ',
    estado: 'MG',
  },
  {
    cidade: 'CHAPADA DO NORTE',
    estado: 'MG',
  },
  {
    cidade: 'CHAPADA GAÚCHA',
    estado: 'MG',
  },
  {
    cidade: 'CHIADOR',
    estado: 'MG',
  },
  {
    cidade: 'CIPOTÂNEA',
    estado: 'MG',
  },
  {
    cidade: 'CLARAVAL',
    estado: 'MG',
  },
  {
    cidade: 'CLARO DOS POÇÕES',
    estado: 'MG',
  },
  {
    cidade: 'CLÁUDIO',
    estado: 'MG',
  },
  {
    cidade: 'COIMBRA',
    estado: 'MG',
  },
  {
    cidade: 'COLUNA',
    estado: 'MG',
  },
  {
    cidade: 'COMENDADOR GOMES',
    estado: 'MG',
  },
  {
    cidade: 'COMERCINHO',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DA APARECIDA',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DAS PEDRAS',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DAS ALAGOAS',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DE IPANEMA',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DO MATO DENTRO',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DO PARÁ',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DO RIO VERDE',
    estado: 'MG',
  },
  {
    cidade: 'CONCEIÇÃO DOS OUROS',
    estado: 'MG',
  },
  {
    cidade: 'CÔNEGO MARINHO',
    estado: 'MG',
  },
  {
    cidade: 'CONFINS',
    estado: 'MG',
  },
  {
    cidade: 'CONGONHAL',
    estado: 'MG',
  },
  {
    cidade: 'CONGONHAS',
    estado: 'MG',
  },
  {
    cidade: 'CONGONHAS DO NORTE',
    estado: 'MG',
  },
  {
    cidade: 'CONQUISTA',
    estado: 'MG',
  },
  {
    cidade: 'CONSELHEIRO LAFAIETE',
    estado: 'MG',
  },
  {
    cidade: 'CONSELHEIRO PENA',
    estado: 'MG',
  },
  {
    cidade: 'CONSOLAÇÃO',
    estado: 'MG',
  },
  {
    cidade: 'CONTAGEM',
    estado: 'MG',
  },
  {
    cidade: 'COQUEIRAL',
    estado: 'MG',
  },
  {
    cidade: 'CORAÇÃO DE JESUS',
    estado: 'MG',
  },
  {
    cidade: 'CORDISBURGO',
    estado: 'MG',
  },
  {
    cidade: 'CORDISLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'CORINTO',
    estado: 'MG',
  },
  {
    cidade: 'COROACI',
    estado: 'MG',
  },
  {
    cidade: 'COROMANDEL',
    estado: 'MG',
  },
  {
    cidade: 'CORONEL FABRICIANO',
    estado: 'MG',
  },
  {
    cidade: 'CORONEL MURTA',
    estado: 'MG',
  },
  {
    cidade: 'CORONEL PACHECO',
    estado: 'MG',
  },
  {
    cidade: 'CORONEL XAVIER CHAVES',
    estado: 'MG',
  },
  {
    cidade: 'CÓRREGO DANTA',
    estado: 'MG',
  },
  {
    cidade: 'CÓRREGO DO BOM JESUS',
    estado: 'MG',
  },
  {
    cidade: 'CÓRREGO FUNDO',
    estado: 'MG',
  },
  {
    cidade: 'CÓRREGO NOVO',
    estado: 'MG',
  },
  {
    cidade: 'COUTO DE MAGALHÃES DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'CRISÓLITA',
    estado: 'MG',
  },
  {
    cidade: 'CRISTAIS',
    estado: 'MG',
  },
  {
    cidade: 'CRISTÁLIA',
    estado: 'MG',
  },
  {
    cidade: 'CRISTIANO OTONI',
    estado: 'MG',
  },
  {
    cidade: 'CRISTINA',
    estado: 'MG',
  },
  {
    cidade: 'CRUCILÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'CRUZEIRO DA FORTALEZA',
    estado: 'MG',
  },
  {
    cidade: 'CRUZÍLIA',
    estado: 'MG',
  },
  {
    cidade: 'CUPARAQUE',
    estado: 'MG',
  },
  {
    cidade: 'CURRAL DE DENTRO',
    estado: 'MG',
  },
  {
    cidade: 'CURVELO',
    estado: 'MG',
  },
  {
    cidade: 'DATAS',
    estado: 'MG',
  },
  {
    cidade: 'DELFIM MOREIRA',
    estado: 'MG',
  },
  {
    cidade: 'DELFINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'DELTA',
    estado: 'MG',
  },
  {
    cidade: 'DESCOBERTO',
    estado: 'MG',
  },
  {
    cidade: 'DESTERRO DE ENTRE RIOS',
    estado: 'MG',
  },
  {
    cidade: 'DESTERRO DO MELO',
    estado: 'MG',
  },
  {
    cidade: 'DIAMANTINA',
    estado: 'MG',
  },
  {
    cidade: 'DIOGO DE VASCONCELOS',
    estado: 'MG',
  },
  {
    cidade: 'DIONÍSIO',
    estado: 'MG',
  },
  {
    cidade: 'DIVINÉSIA',
    estado: 'MG',
  },
  {
    cidade: 'DIVINO',
    estado: 'MG',
  },
  {
    cidade: 'DIVINO DAS LARANJEIRAS',
    estado: 'MG',
  },
  {
    cidade: 'DIVINOLÂNDIA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'DIVINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'DIVISA ALEGRE',
    estado: 'MG',
  },
  {
    cidade: 'DIVISA NOVA',
    estado: 'MG',
  },
  {
    cidade: 'DIVISÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'DOM BOSCO',
    estado: 'MG',
  },
  {
    cidade: 'DOM CAVATI',
    estado: 'MG',
  },
  {
    cidade: 'DOM JOAQUIM',
    estado: 'MG',
  },
  {
    cidade: 'DOM SILVÉRIO',
    estado: 'MG',
  },
  {
    cidade: 'DOM VIÇOSO',
    estado: 'MG',
  },
  {
    cidade: 'DONA EUZÉBIA',
    estado: 'MG',
  },
  {
    cidade: 'DORES DE CAMPOS',
    estado: 'MG',
  },
  {
    cidade: 'DORES DE GUANHÃES',
    estado: 'MG',
  },
  {
    cidade: 'DORES DO INDAIÁ',
    estado: 'MG',
  },
  {
    cidade: 'DORES DO TURVO',
    estado: 'MG',
  },
  {
    cidade: 'DORESÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'DOURADOQUARA',
    estado: 'MG',
  },
  {
    cidade: 'DURANDÉ',
    estado: 'MG',
  },
  {
    cidade: 'ELÓI MENDES',
    estado: 'MG',
  },
  {
    cidade: 'ENGENHEIRO CALDAS',
    estado: 'MG',
  },
  {
    cidade: 'ENGENHEIRO NAVARRO',
    estado: 'MG',
  },
  {
    cidade: 'ENTRE FOLHAS',
    estado: 'MG',
  },
  {
    cidade: 'ENTRE RIOS DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'ERVÁLIA',
    estado: 'MG',
  },
  {
    cidade: 'ESMERALDAS',
    estado: 'MG',
  },
  {
    cidade: 'ESPERA FELIZ',
    estado: 'MG',
  },
  {
    cidade: 'ESPINOSA',
    estado: 'MG',
  },
  {
    cidade: 'ESPÍRITO SANTO DO DOURADO',
    estado: 'MG',
  },
  {
    cidade: 'ESTIVA',
    estado: 'MG',
  },
  {
    cidade: 'ESTRELA DALVA',
    estado: 'MG',
  },
  {
    cidade: 'ESTRELA DO INDAIÁ',
    estado: 'MG',
  },
  {
    cidade: 'ESTRELA DO SUL',
    estado: 'MG',
  },
  {
    cidade: 'EUGENÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'EWBANK DA CÂMARA',
    estado: 'MG',
  },
  {
    cidade: 'EXTREMA',
    estado: 'MG',
  },
  {
    cidade: 'FAMA',
    estado: 'MG',
  },
  {
    cidade: 'FARIA LEMOS',
    estado: 'MG',
  },
  {
    cidade: 'FELÍCIO DOS SANTOS',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GONÇALO DO RIO PRETO',
    estado: 'MG',
  },
  {
    cidade: 'FELISBURGO',
    estado: 'MG',
  },
  {
    cidade: 'FELIXLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'FERNANDES TOURINHO',
    estado: 'MG',
  },
  {
    cidade: 'FERROS',
    estado: 'MG',
  },
  {
    cidade: 'FERVEDOURO',
    estado: 'MG',
  },
  {
    cidade: 'FLORESTAL',
    estado: 'MG',
  },
  {
    cidade: 'FORMIGA',
    estado: 'MG',
  },
  {
    cidade: 'FORMOSO',
    estado: 'MG',
  },
  {
    cidade: 'FORTALEZA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'FORTUNA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'FRANCISCO BADARÓ',
    estado: 'MG',
  },
  {
    cidade: 'FRANCISCO DUMONT',
    estado: 'MG',
  },
  {
    cidade: 'FRANCISCO SÁ',
    estado: 'MG',
  },
  {
    cidade: 'FRANCISCÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'FREI GASPAR',
    estado: 'MG',
  },
  {
    cidade: 'FREI INOCÊNCIO',
    estado: 'MG',
  },
  {
    cidade: 'FREI LAGONEGRO',
    estado: 'MG',
  },
  {
    cidade: 'FRONTEIRA',
    estado: 'MG',
  },
  {
    cidade: 'FRONTEIRA DOS VALES',
    estado: 'MG',
  },
  {
    cidade: 'FRUTA DE LEITE',
    estado: 'MG',
  },
  {
    cidade: 'FRUTAL',
    estado: 'MG',
  },
  {
    cidade: 'FUNILÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'GALILÉIA',
    estado: 'MG',
  },
  {
    cidade: 'GAMELEIRAS',
    estado: 'MG',
  },
  {
    cidade: 'GLAUCILÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'GOIABEIRA',
    estado: 'MG',
  },
  {
    cidade: 'GOIANÁ',
    estado: 'MG',
  },
  {
    cidade: 'GONÇALVES',
    estado: 'MG',
  },
  {
    cidade: 'GONZAGA',
    estado: 'MG',
  },
  {
    cidade: 'GOUVEIA',
    estado: 'MG',
  },
  {
    cidade: 'GOVERNADOR VALADARES',
    estado: 'MG',
  },
  {
    cidade: 'GRÃO MOGOL',
    estado: 'MG',
  },
  {
    cidade: 'GRUPIARA',
    estado: 'MG',
  },
  {
    cidade: 'GUANHÃES',
    estado: 'MG',
  },
  {
    cidade: 'GUAPÉ',
    estado: 'MG',
  },
  {
    cidade: 'GUARACIABA',
    estado: 'MG',
  },
  {
    cidade: 'GUARACIAMA',
    estado: 'MG',
  },
  {
    cidade: 'GUARANÉSIA',
    estado: 'MG',
  },
  {
    cidade: 'GUARANI',
    estado: 'MG',
  },
  {
    cidade: 'GUARARÁ',
    estado: 'MG',
  },
  {
    cidade: 'GUARDA-MOR',
    estado: 'MG',
  },
  {
    cidade: 'GUAXUPÉ',
    estado: 'MG',
  },
  {
    cidade: 'GUIDOVAL',
    estado: 'MG',
  },
  {
    cidade: 'GUIMARÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'GUIRICEMA',
    estado: 'MG',
  },
  {
    cidade: 'GURINHATÃ',
    estado: 'MG',
  },
  {
    cidade: 'HELIODORA',
    estado: 'MG',
  },
  {
    cidade: 'IAPU',
    estado: 'MG',
  },
  {
    cidade: 'IBERTIOGA',
    estado: 'MG',
  },
  {
    cidade: 'IBIÁ',
    estado: 'MG',
  },
  {
    cidade: 'IBIAÍ',
    estado: 'MG',
  },
  {
    cidade: 'IBIRACATU',
    estado: 'MG',
  },
  {
    cidade: 'IBIRACI',
    estado: 'MG',
  },
  {
    cidade: 'IBIRITÉ',
    estado: 'MG',
  },
  {
    cidade: 'IBITIÚRA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'IBITURUNA',
    estado: 'MG',
  },
  {
    cidade: 'ICARAÍ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'IGARAPÉ',
    estado: 'MG',
  },
  {
    cidade: 'IGARATINGA',
    estado: 'MG',
  },
  {
    cidade: 'IGUATAMA',
    estado: 'MG',
  },
  {
    cidade: 'IJACI',
    estado: 'MG',
  },
  {
    cidade: 'ILICÍNEA',
    estado: 'MG',
  },
  {
    cidade: 'IMBÉ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'INCONFIDENTES',
    estado: 'MG',
  },
  {
    cidade: 'INDAIABIRA',
    estado: 'MG',
  },
  {
    cidade: 'INDIANÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'INGAÍ',
    estado: 'MG',
  },
  {
    cidade: 'INHAPIM',
    estado: 'MG',
  },
  {
    cidade: 'INHAÚMA',
    estado: 'MG',
  },
  {
    cidade: 'INIMUTABA',
    estado: 'MG',
  },
  {
    cidade: 'IPABA',
    estado: 'MG',
  },
  {
    cidade: 'IPANEMA',
    estado: 'MG',
  },
  {
    cidade: 'IPATINGA',
    estado: 'MG',
  },
  {
    cidade: 'IPIAÇU',
    estado: 'MG',
  },
  {
    cidade: 'IPUIÚNA',
    estado: 'MG',
  },
  {
    cidade: 'IRAÍ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'ITABIRA',
    estado: 'MG',
  },
  {
    cidade: 'ITABIRINHA',
    estado: 'MG',
  },
  {
    cidade: 'ITABIRITO',
    estado: 'MG',
  },
  {
    cidade: 'ITACAMBIRA',
    estado: 'MG',
  },
  {
    cidade: 'ITACARAMBI',
    estado: 'MG',
  },
  {
    cidade: 'ITAGUARA',
    estado: 'MG',
  },
  {
    cidade: 'ITAIPÉ',
    estado: 'MG',
  },
  {
    cidade: 'ITAJUBÁ',
    estado: 'MG',
  },
  {
    cidade: 'ITAMARANDIBA',
    estado: 'MG',
  },
  {
    cidade: 'ITAMARATI DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'ITAMBACURI',
    estado: 'MG',
  },
  {
    cidade: 'ITAMBÉ DO MATO DENTRO',
    estado: 'MG',
  },
  {
    cidade: 'ITAMOGI',
    estado: 'MG',
  },
  {
    cidade: 'ITAMONTE',
    estado: 'MG',
  },
  {
    cidade: 'ITANHANDU',
    estado: 'MG',
  },
  {
    cidade: 'ITANHOMI',
    estado: 'MG',
  },
  {
    cidade: 'ITAOBIM',
    estado: 'MG',
  },
  {
    cidade: 'ITAPAGIPE',
    estado: 'MG',
  },
  {
    cidade: 'ITAPECERICA',
    estado: 'MG',
  },
  {
    cidade: 'ITAPEVA',
    estado: 'MG',
  },
  {
    cidade: 'ITATIAIUÇU',
    estado: 'MG',
  },
  {
    cidade: 'ITAÚ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'ITAÚNA',
    estado: 'MG',
  },
  {
    cidade: 'ITAVERAVA',
    estado: 'MG',
  },
  {
    cidade: 'ITINGA',
    estado: 'MG',
  },
  {
    cidade: 'ITUETA',
    estado: 'MG',
  },
  {
    cidade: 'ITUIUTABA',
    estado: 'MG',
  },
  {
    cidade: 'ITUMIRIM',
    estado: 'MG',
  },
  {
    cidade: 'ITURAMA',
    estado: 'MG',
  },
  {
    cidade: 'ITUTINGA',
    estado: 'MG',
  },
  {
    cidade: 'JABOTICATUBAS',
    estado: 'MG',
  },
  {
    cidade: 'JACINTO',
    estado: 'MG',
  },
  {
    cidade: 'JACUÍ',
    estado: 'MG',
  },
  {
    cidade: 'JACUTINGA',
    estado: 'MG',
  },
  {
    cidade: 'JAGUARAÇU',
    estado: 'MG',
  },
  {
    cidade: 'JAÍBA',
    estado: 'MG',
  },
  {
    cidade: 'JAMPRUCA',
    estado: 'MG',
  },
  {
    cidade: 'JANAÚBA',
    estado: 'MG',
  },
  {
    cidade: 'JANUÁRIA',
    estado: 'MG',
  },
  {
    cidade: 'JAPARAÍBA',
    estado: 'MG',
  },
  {
    cidade: 'JAPONVAR',
    estado: 'MG',
  },
  {
    cidade: 'JECEABA',
    estado: 'MG',
  },
  {
    cidade: 'JENIPAPO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'JEQUERI',
    estado: 'MG',
  },
  {
    cidade: 'JEQUITAÍ',
    estado: 'MG',
  },
  {
    cidade: 'JEQUITIBÁ',
    estado: 'MG',
  },
  {
    cidade: 'JEQUITINHONHA',
    estado: 'MG',
  },
  {
    cidade: 'JESUÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'JOAÍMA',
    estado: 'MG',
  },
  {
    cidade: 'JOANÉSIA',
    estado: 'MG',
  },
  {
    cidade: 'JOÃO MONLEVADE',
    estado: 'MG',
  },
  {
    cidade: 'JOÃO PINHEIRO',
    estado: 'MG',
  },
  {
    cidade: 'JOAQUIM FELÍCIO',
    estado: 'MG',
  },
  {
    cidade: 'JORDÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'JOSÉ GONÇALVES DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'JOSÉ RAYDAN',
    estado: 'MG',
  },
  {
    cidade: 'JOSENÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'NOVA UNIÃO',
    estado: 'MG',
  },
  {
    cidade: 'JUATUBA',
    estado: 'MG',
  },
  {
    cidade: 'JUIZ DE FORA',
    estado: 'MG',
  },
  {
    cidade: 'JURAMENTO',
    estado: 'MG',
  },
  {
    cidade: 'JURUAIA',
    estado: 'MG',
  },
  {
    cidade: 'JUVENÍLIA',
    estado: 'MG',
  },
  {
    cidade: 'LADAINHA',
    estado: 'MG',
  },
  {
    cidade: 'LAGAMAR',
    estado: 'MG',
  },
  {
    cidade: 'LAGOA DA PRATA',
    estado: 'MG',
  },
  {
    cidade: 'LAGOA DOS PATOS',
    estado: 'MG',
  },
  {
    cidade: 'LAGOA DOURADA',
    estado: 'MG',
  },
  {
    cidade: 'LAGOA FORMOSA',
    estado: 'MG',
  },
  {
    cidade: 'LAGOA GRANDE',
    estado: 'MG',
  },
  {
    cidade: 'LAGOA SANTA',
    estado: 'MG',
  },
  {
    cidade: 'LAJINHA',
    estado: 'MG',
  },
  {
    cidade: 'LAMBARI',
    estado: 'MG',
  },
  {
    cidade: 'LAMIM',
    estado: 'MG',
  },
  {
    cidade: 'LARANJAL',
    estado: 'MG',
  },
  {
    cidade: 'LASSANCE',
    estado: 'MG',
  },
  {
    cidade: 'LAVRAS',
    estado: 'MG',
  },
  {
    cidade: 'LEANDRO FERREIRA',
    estado: 'MG',
  },
  {
    cidade: 'LEME DO PRADO',
    estado: 'MG',
  },
  {
    cidade: 'LEOPOLDINA',
    estado: 'MG',
  },
  {
    cidade: 'LIBERDADE',
    estado: 'MG',
  },
  {
    cidade: 'LIMA DUARTE',
    estado: 'MG',
  },
  {
    cidade: 'LIMEIRA DO OESTE',
    estado: 'MG',
  },
  {
    cidade: 'LONTRA',
    estado: 'MG',
  },
  {
    cidade: 'LUISBURGO',
    estado: 'MG',
  },
  {
    cidade: 'LUISLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'LUMINÁRIAS',
    estado: 'MG',
  },
  {
    cidade: 'LUZ',
    estado: 'MG',
  },
  {
    cidade: 'MACHACALIS',
    estado: 'MG',
  },
  {
    cidade: 'MACHADO',
    estado: 'MG',
  },
  {
    cidade: 'MADRE DE DEUS DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'MALACACHETA',
    estado: 'MG',
  },
  {
    cidade: 'MAMONAS',
    estado: 'MG',
  },
  {
    cidade: 'MANGA',
    estado: 'MG',
  },
  {
    cidade: 'MANHUAÇU',
    estado: 'MG',
  },
  {
    cidade: 'MANHUMIRIM',
    estado: 'MG',
  },
  {
    cidade: 'MANTENA',
    estado: 'MG',
  },
  {
    cidade: 'MARAVILHAS',
    estado: 'MG',
  },
  {
    cidade: 'MAR DE ESPANHA',
    estado: 'MG',
  },
  {
    cidade: 'MARIA DA FÉ',
    estado: 'MG',
  },
  {
    cidade: 'MARIANA',
    estado: 'MG',
  },
  {
    cidade: 'MARILAC',
    estado: 'MG',
  },
  {
    cidade: 'MÁRIO CAMPOS',
    estado: 'MG',
  },
  {
    cidade: 'MARIPÁ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'MARLIÉRIA',
    estado: 'MG',
  },
  {
    cidade: 'MARMELÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'MARTINHO CAMPOS',
    estado: 'MG',
  },
  {
    cidade: 'MARTINS SOARES',
    estado: 'MG',
  },
  {
    cidade: 'MATA VERDE',
    estado: 'MG',
  },
  {
    cidade: 'MATERLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'MATEUS LEME',
    estado: 'MG',
  },
  {
    cidade: 'MATIAS BARBOSA',
    estado: 'MG',
  },
  {
    cidade: 'MATIAS CARDOSO',
    estado: 'MG',
  },
  {
    cidade: 'MATIPÓ',
    estado: 'MG',
  },
  {
    cidade: 'MATO VERDE',
    estado: 'MG',
  },
  {
    cidade: 'MATOZINHOS',
    estado: 'MG',
  },
  {
    cidade: 'MATUTINA',
    estado: 'MG',
  },
  {
    cidade: 'MEDEIROS',
    estado: 'MG',
  },
  {
    cidade: 'MEDINA',
    estado: 'MG',
  },
  {
    cidade: 'MENDES PIMENTEL',
    estado: 'MG',
  },
  {
    cidade: 'MERCÊS',
    estado: 'MG',
  },
  {
    cidade: 'MESQUITA',
    estado: 'MG',
  },
  {
    cidade: 'MINAS NOVAS',
    estado: 'MG',
  },
  {
    cidade: 'MINDURI',
    estado: 'MG',
  },
  {
    cidade: 'MIRABELA',
    estado: 'MG',
  },
  {
    cidade: 'MIRADOURO',
    estado: 'MG',
  },
  {
    cidade: 'MIRAÍ',
    estado: 'MG',
  },
  {
    cidade: 'MIRAVÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'MOEDA',
    estado: 'MG',
  },
  {
    cidade: 'MOEMA',
    estado: 'MG',
  },
  {
    cidade: 'MONJOLOS',
    estado: 'MG',
  },
  {
    cidade: 'MONSENHOR PAULO',
    estado: 'MG',
  },
  {
    cidade: 'MONTALVÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'MONTE ALEGRE DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'MONTE AZUL',
    estado: 'MG',
  },
  {
    cidade: 'MONTE BELO',
    estado: 'MG',
  },
  {
    cidade: 'MONTE CARMELO',
    estado: 'MG',
  },
  {
    cidade: 'MONTE FORMOSO',
    estado: 'MG',
  },
  {
    cidade: 'MONTE SANTO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'MONTES CLAROS',
    estado: 'MG',
  },
  {
    cidade: 'MONTE SIÃO',
    estado: 'MG',
  },
  {
    cidade: 'MONTEZUMA',
    estado: 'MG',
  },
  {
    cidade: 'MORADA NOVA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'MORRO DA GARÇA',
    estado: 'MG',
  },
  {
    cidade: 'MORRO DO PILAR',
    estado: 'MG',
  },
  {
    cidade: 'MUNHOZ',
    estado: 'MG',
  },
  {
    cidade: 'MURIAÉ',
    estado: 'MG',
  },
  {
    cidade: 'MUTUM',
    estado: 'MG',
  },
  {
    cidade: 'MUZAMBINHO',
    estado: 'MG',
  },
  {
    cidade: 'NACIP RAYDAN',
    estado: 'MG',
  },
  {
    cidade: 'NANUQUE',
    estado: 'MG',
  },
  {
    cidade: 'NAQUE',
    estado: 'MG',
  },
  {
    cidade: 'NATALÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'NATÉRCIA',
    estado: 'MG',
  },
  {
    cidade: 'NAZARENO',
    estado: 'MG',
  },
  {
    cidade: 'NEPOMUCENO',
    estado: 'MG',
  },
  {
    cidade: 'NINHEIRA',
    estado: 'MG',
  },
  {
    cidade: 'NOVA BELÉM',
    estado: 'MG',
  },
  {
    cidade: 'NOVA ERA',
    estado: 'MG',
  },
  {
    cidade: 'NOVA LIMA',
    estado: 'MG',
  },
  {
    cidade: 'NOVA MÓDICA',
    estado: 'MG',
  },
  {
    cidade: 'NOVA PONTE',
    estado: 'MG',
  },
  {
    cidade: 'NOVA PORTEIRINHA',
    estado: 'MG',
  },
  {
    cidade: 'NOVA RESENDE',
    estado: 'MG',
  },
  {
    cidade: 'NOVA SERRANA',
    estado: 'MG',
  },
  {
    cidade: 'NOVO CRUZEIRO',
    estado: 'MG',
  },
  {
    cidade: 'NOVO ORIENTE DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'NOVORIZONTE',
    estado: 'MG',
  },
  {
    cidade: 'OLARIA',
    estado: 'MG',
  },
  {
    cidade: "OLHOS-D'ÁGUA",
    estado: 'MG',
  },
  {
    cidade: 'OLÍMPIO NORONHA',
    estado: 'MG',
  },
  {
    cidade: 'OLIVEIRA',
    estado: 'MG',
  },
  {
    cidade: 'OLIVEIRA FORTES',
    estado: 'MG',
  },
  {
    cidade: 'ONÇA DE PITANGUI',
    estado: 'MG',
  },
  {
    cidade: 'ORATÓRIOS',
    estado: 'MG',
  },
  {
    cidade: 'ORIZÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'OURO BRANCO',
    estado: 'MG',
  },
  {
    cidade: 'OURO FINO',
    estado: 'MG',
  },
  {
    cidade: 'OURO PRETO',
    estado: 'MG',
  },
  {
    cidade: 'OURO VERDE DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'PADRE CARVALHO',
    estado: 'MG',
  },
  {
    cidade: 'PADRE PARAÍSO',
    estado: 'MG',
  },
  {
    cidade: 'PAINEIRAS',
    estado: 'MG',
  },
  {
    cidade: 'PAINS',
    estado: 'MG',
  },
  {
    cidade: 'PAI PEDRO',
    estado: 'MG',
  },
  {
    cidade: 'PAIVA',
    estado: 'MG',
  },
  {
    cidade: 'PALMA',
    estado: 'MG',
  },
  {
    cidade: 'PALMÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'PAPAGAIOS',
    estado: 'MG',
  },
  {
    cidade: 'PARACATU',
    estado: 'MG',
  },
  {
    cidade: 'PARÁ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'PARAGUAÇU',
    estado: 'MG',
  },
  {
    cidade: 'PARAISÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'PARAOPEBA',
    estado: 'MG',
  },
  {
    cidade: 'PASSABÉM',
    estado: 'MG',
  },
  {
    cidade: 'PASSA QUATRO',
    estado: 'MG',
  },
  {
    cidade: 'PASSA TEMPO',
    estado: 'MG',
  },
  {
    cidade: 'PASSA VINTE',
    estado: 'MG',
  },
  {
    cidade: 'PASSOS',
    estado: 'MG',
  },
  {
    cidade: 'PATIS',
    estado: 'MG',
  },
  {
    cidade: 'PATOS DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'PATROCÍNIO',
    estado: 'MG',
  },
  {
    cidade: 'PATROCÍNIO DO MURIAÉ',
    estado: 'MG',
  },
  {
    cidade: 'PAULA CÂNDIDO',
    estado: 'MG',
  },
  {
    cidade: 'PAULISTAS',
    estado: 'MG',
  },
  {
    cidade: 'PAVÃO',
    estado: 'MG',
  },
  {
    cidade: 'PEÇANHA',
    estado: 'MG',
  },
  {
    cidade: 'PEDRA AZUL',
    estado: 'MG',
  },
  {
    cidade: 'PEDRA BONITA',
    estado: 'MG',
  },
  {
    cidade: 'PEDRA DO ANTA',
    estado: 'MG',
  },
  {
    cidade: 'PEDRA DO INDAIÁ',
    estado: 'MG',
  },
  {
    cidade: 'PEDRA DOURADA',
    estado: 'MG',
  },
  {
    cidade: 'PEDRALVA',
    estado: 'MG',
  },
  {
    cidade: 'PEDRAS DE MARIA DA CRUZ',
    estado: 'MG',
  },
  {
    cidade: 'PEDRINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'PEDRO LEOPOLDO',
    estado: 'MG',
  },
  {
    cidade: 'PEDRO TEIXEIRA',
    estado: 'MG',
  },
  {
    cidade: 'PEQUERI',
    estado: 'MG',
  },
  {
    cidade: 'PEQUI',
    estado: 'MG',
  },
  {
    cidade: 'PERDIGÃO',
    estado: 'MG',
  },
  {
    cidade: 'PERDIZES',
    estado: 'MG',
  },
  {
    cidade: 'PERDÕES',
    estado: 'MG',
  },
  {
    cidade: 'PERIQUITO',
    estado: 'MG',
  },
  {
    cidade: 'PESCADOR',
    estado: 'MG',
  },
  {
    cidade: 'PIAU',
    estado: 'MG',
  },
  {
    cidade: 'PIEDADE DE CARATINGA',
    estado: 'MG',
  },
  {
    cidade: 'PIEDADE DE PONTE NOVA',
    estado: 'MG',
  },
  {
    cidade: 'PIEDADE DO RIO GRANDE',
    estado: 'MG',
  },
  {
    cidade: 'PIEDADE DOS GERAIS',
    estado: 'MG',
  },
  {
    cidade: 'PIMENTA',
    estado: 'MG',
  },
  {
    cidade: "PINGO-D'ÁGUA",
    estado: 'MG',
  },
  {
    cidade: 'PINTÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'PIRACEMA',
    estado: 'MG',
  },
  {
    cidade: 'PIRAJUBA',
    estado: 'MG',
  },
  {
    cidade: 'PIRANGA',
    estado: 'MG',
  },
  {
    cidade: 'PIRANGUÇU',
    estado: 'MG',
  },
  {
    cidade: 'PIRANGUINHO',
    estado: 'MG',
  },
  {
    cidade: 'PIRAPETINGA',
    estado: 'MG',
  },
  {
    cidade: 'PIRAPORA',
    estado: 'MG',
  },
  {
    cidade: 'PIRAÚBA',
    estado: 'MG',
  },
  {
    cidade: 'PITANGUI',
    estado: 'MG',
  },
  {
    cidade: 'PIUMHI',
    estado: 'MG',
  },
  {
    cidade: 'PLANURA',
    estado: 'MG',
  },
  {
    cidade: 'POÇO FUNDO',
    estado: 'MG',
  },
  {
    cidade: 'POÇOS DE CALDAS',
    estado: 'MG',
  },
  {
    cidade: 'POCRANE',
    estado: 'MG',
  },
  {
    cidade: 'POMPÉU',
    estado: 'MG',
  },
  {
    cidade: 'PONTE NOVA',
    estado: 'MG',
  },
  {
    cidade: 'PONTO CHIQUE',
    estado: 'MG',
  },
  {
    cidade: 'PONTO DOS VOLANTES',
    estado: 'MG',
  },
  {
    cidade: 'PORTEIRINHA',
    estado: 'MG',
  },
  {
    cidade: 'PORTO FIRME',
    estado: 'MG',
  },
  {
    cidade: 'POTÉ',
    estado: 'MG',
  },
  {
    cidade: 'POUSO ALEGRE',
    estado: 'MG',
  },
  {
    cidade: 'POUSO ALTO',
    estado: 'MG',
  },
  {
    cidade: 'PRADOS',
    estado: 'MG',
  },
  {
    cidade: 'PRATA',
    estado: 'MG',
  },
  {
    cidade: 'PRATÁPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'PRATINHA',
    estado: 'MG',
  },
  {
    cidade: 'PRESIDENTE BERNARDES',
    estado: 'MG',
  },
  {
    cidade: 'PRESIDENTE JUSCELINO',
    estado: 'MG',
  },
  {
    cidade: 'PRESIDENTE KUBITSCHEK',
    estado: 'MG',
  },
  {
    cidade: 'PRESIDENTE OLEGÁRIO',
    estado: 'MG',
  },
  {
    cidade: 'ALTO JEQUITIBÁ',
    estado: 'MG',
  },
  {
    cidade: 'PRUDENTE DE MORAIS',
    estado: 'MG',
  },
  {
    cidade: 'QUARTEL GERAL',
    estado: 'MG',
  },
  {
    cidade: 'QUELUZITO',
    estado: 'MG',
  },
  {
    cidade: 'RAPOSOS',
    estado: 'MG',
  },
  {
    cidade: 'RAUL SOARES',
    estado: 'MG',
  },
  {
    cidade: 'RECREIO',
    estado: 'MG',
  },
  {
    cidade: 'REDUTO',
    estado: 'MG',
  },
  {
    cidade: 'RESENDE COSTA',
    estado: 'MG',
  },
  {
    cidade: 'RESPLENDOR',
    estado: 'MG',
  },
  {
    cidade: 'RESSAQUINHA',
    estado: 'MG',
  },
  {
    cidade: 'RIACHINHO',
    estado: 'MG',
  },
  {
    cidade: 'RIACHO DOS MACHADOS',
    estado: 'MG',
  },
  {
    cidade: 'RIBEIRÃO DAS NEVES',
    estado: 'MG',
  },
  {
    cidade: 'RIBEIRÃO VERMELHO',
    estado: 'MG',
  },
  {
    cidade: 'RIO ACIMA',
    estado: 'MG',
  },
  {
    cidade: 'RIO CASCA',
    estado: 'MG',
  },
  {
    cidade: 'RIO DOCE',
    estado: 'MG',
  },
  {
    cidade: 'RIO DO PRADO',
    estado: 'MG',
  },
  {
    cidade: 'RIO ESPERA',
    estado: 'MG',
  },
  {
    cidade: 'RIO MANSO',
    estado: 'MG',
  },
  {
    cidade: 'RIO NOVO',
    estado: 'MG',
  },
  {
    cidade: 'RIO PARANAÍBA',
    estado: 'MG',
  },
  {
    cidade: 'RIO PARDO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'RIO PIRACICABA',
    estado: 'MG',
  },
  {
    cidade: 'RIO POMBA',
    estado: 'MG',
  },
  {
    cidade: 'RIO PRETO',
    estado: 'MG',
  },
  {
    cidade: 'RIO VERMELHO',
    estado: 'MG',
  },
  {
    cidade: 'RITÁPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'ROCHEDO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'RODEIRO',
    estado: 'MG',
  },
  {
    cidade: 'ROMARIA',
    estado: 'MG',
  },
  {
    cidade: 'ROSÁRIO DA LIMEIRA',
    estado: 'MG',
  },
  {
    cidade: 'RUBELITA',
    estado: 'MG',
  },
  {
    cidade: 'RUBIM',
    estado: 'MG',
  },
  {
    cidade: 'SABARÁ',
    estado: 'MG',
  },
  {
    cidade: 'SABINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'SACRAMENTO',
    estado: 'MG',
  },
  {
    cidade: 'SALINAS',
    estado: 'MG',
  },
  {
    cidade: 'SALTO DA DIVISA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA BÁRBARA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA BÁRBARA DO LESTE',
    estado: 'MG',
  },
  {
    cidade: 'SANTA BÁRBARA DO MONTE VERDE',
    estado: 'MG',
  },
  {
    cidade: 'SANTA BÁRBARA DO TUGÚRIO',
    estado: 'MG',
  },
  {
    cidade: 'SANTA CRUZ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA CRUZ DE SALINAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA CRUZ DO ESCALVADO',
    estado: 'MG',
  },
  {
    cidade: 'SANTA EFIGÊNIA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA FÉ DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA HELENA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA JULIANA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA LUZIA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA MARGARIDA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA MARIA DE ITABIRA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA MARIA DO SALTO',
    estado: 'MG',
  },
  {
    cidade: 'SANTA MARIA DO SUAÇUÍ',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DA VARGEM',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DE CATAGUASES',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DE PIRAPAMA',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DO DESERTO',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DO GARAMBÉU',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DO JACARÉ',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DO MANHUAÇU',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DO PARAÍSO',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DO RIACHO',
    estado: 'MG',
  },
  {
    cidade: 'SANTANA DOS MONTES',
    estado: 'MG',
  },
  {
    cidade: 'SANTA RITA DE CALDAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA RITA DE JACUTINGA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA RITA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SANTA RITA DE IBITIPOCA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA RITA DO ITUETO',
    estado: 'MG',
  },
  {
    cidade: 'SANTA RITA DO SAPUCAÍ',
    estado: 'MG',
  },
  {
    cidade: 'SANTA ROSA DA SERRA',
    estado: 'MG',
  },
  {
    cidade: 'SANTA VITÓRIA',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO AMPARO',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO AVENTUREIRO',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO GRAMA',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO ITAMBÉ',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO JACINTO',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO MONTE',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO RETIRO',
    estado: 'MG',
  },
  {
    cidade: 'SANTO ANTÔNIO DO RIO ABAIXO',
    estado: 'MG',
  },
  {
    cidade: 'SANTO HIPÓLITO',
    estado: 'MG',
  },
  {
    cidade: 'SANTOS DUMONT',
    estado: 'MG',
  },
  {
    cidade: 'SÃO BENTO ABADE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO BRÁS DO SUAÇUÍ',
    estado: 'MG',
  },
  {
    cidade: 'SÃO DOMINGOS DAS DORES',
    estado: 'MG',
  },
  {
    cidade: 'SÃO DOMINGOS DO PRATA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO FÉLIX DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SÃO FRANCISCO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO FRANCISCO DE PAULA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO FRANCISCO DE SALES',
    estado: 'MG',
  },
  {
    cidade: 'SÃO FRANCISCO DO GLÓRIA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GERALDO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GERALDO DA PIEDADE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GERALDO DO BAIXIO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GONÇALO DO ABAETÉ',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GONÇALO DO PARÁ',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GONÇALO DO RIO ABAIXO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GONÇALO DO SAPUCAÍ',
    estado: 'MG',
  },
  {
    cidade: 'SÃO GOTARDO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO BATISTA DO GLÓRIA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DA LAGOA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DA MATA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DA PONTE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DAS MISSÕES',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DEL REI',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DO MANHUAÇU',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DO MANTENINHA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DO ORIENTE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DO PACUÍ',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO DO PARAÍSO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO EVANGELISTA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOÃO NEPOMUCENO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOAQUIM DE BICAS',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DA BARRA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DA LAPA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DA SAFIRA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DA VARGINHA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DO ALEGRE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DO DIVINO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DO GOIABAL',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DO JACURI',
    estado: 'MG',
  },
  {
    cidade: 'SÃO JOSÉ DO MANTIMENTO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO LOURENÇO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO MIGUEL DO ANTA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO PEDRO DA UNIÃO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO PEDRO DOS FERROS',
    estado: 'MG',
  },
  {
    cidade: 'SÃO PEDRO DO SUAÇUÍ',
    estado: 'MG',
  },
  {
    cidade: 'SÃO ROMÃO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO ROQUE DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DA BELA VISTA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DA VARGEM ALEGRE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO ANTA',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO MARANHÃO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO OESTE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO PARAÍSO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO RIO PRETO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO RIO VERDE',
    estado: 'MG',
  },
  {
    cidade: 'SÃO TIAGO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO TOMÁS DE AQUINO',
    estado: 'MG',
  },
  {
    cidade: 'SÃO TOMÉ DAS LETRAS',
    estado: 'MG',
  },
  {
    cidade: 'SÃO VICENTE DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SAPUCAÍ-MIRIM',
    estado: 'MG',
  },
  {
    cidade: 'SARDOÁ',
    estado: 'MG',
  },
  {
    cidade: 'SARZEDO',
    estado: 'MG',
  },
  {
    cidade: 'SETUBINHA',
    estado: 'MG',
  },
  {
    cidade: 'SEM-PEIXE',
    estado: 'MG',
  },
  {
    cidade: 'SENADOR AMARAL',
    estado: 'MG',
  },
  {
    cidade: 'SENADOR CORTES',
    estado: 'MG',
  },
  {
    cidade: 'SENADOR FIRMINO',
    estado: 'MG',
  },
  {
    cidade: 'SENADOR JOSÉ BENTO',
    estado: 'MG',
  },
  {
    cidade: 'SENADOR MODESTINO GONÇALVES',
    estado: 'MG',
  },
  {
    cidade: 'SENHORA DE OLIVEIRA',
    estado: 'MG',
  },
  {
    cidade: 'SENHORA DO PORTO',
    estado: 'MG',
  },
  {
    cidade: 'SENHORA DOS REMÉDIOS',
    estado: 'MG',
  },
  {
    cidade: 'SERICITA',
    estado: 'MG',
  },
  {
    cidade: 'SERITINGA',
    estado: 'MG',
  },
  {
    cidade: 'SERRA AZUL DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SERRA DA SAUDADE',
    estado: 'MG',
  },
  {
    cidade: 'SERRA DOS AIMORÉS',
    estado: 'MG',
  },
  {
    cidade: 'SERRA DO SALITRE',
    estado: 'MG',
  },
  {
    cidade: 'SERRANIA',
    estado: 'MG',
  },
  {
    cidade: 'SERRANÓPOLIS DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'SERRANOS',
    estado: 'MG',
  },
  {
    cidade: 'SERRO',
    estado: 'MG',
  },
  {
    cidade: 'SETE LAGOAS',
    estado: 'MG',
  },
  {
    cidade: 'SILVEIRÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'SILVIANÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'SIMÃO PEREIRA',
    estado: 'MG',
  },
  {
    cidade: 'SIMONÉSIA',
    estado: 'MG',
  },
  {
    cidade: 'SOBRÁLIA',
    estado: 'MG',
  },
  {
    cidade: 'SOLEDADE DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'TABULEIRO',
    estado: 'MG',
  },
  {
    cidade: 'TAIOBEIRAS',
    estado: 'MG',
  },
  {
    cidade: 'TAPARUBA',
    estado: 'MG',
  },
  {
    cidade: 'TAPIRA',
    estado: 'MG',
  },
  {
    cidade: 'TAPIRAÍ',
    estado: 'MG',
  },
  {
    cidade: 'TAQUARAÇU DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'TARUMIRIM',
    estado: 'MG',
  },
  {
    cidade: 'TEIXEIRAS',
    estado: 'MG',
  },
  {
    cidade: 'TEÓFILO OTONI',
    estado: 'MG',
  },
  {
    cidade: 'TIMÓTEO',
    estado: 'MG',
  },
  {
    cidade: 'TIRADENTES',
    estado: 'MG',
  },
  {
    cidade: 'TIROS',
    estado: 'MG',
  },
  {
    cidade: 'TOCANTINS',
    estado: 'MG',
  },
  {
    cidade: 'TOCOS DO MOJI',
    estado: 'MG',
  },
  {
    cidade: 'TOLEDO',
    estado: 'MG',
  },
  {
    cidade: 'TOMBOS',
    estado: 'MG',
  },
  {
    cidade: 'TRÊS CORAÇÕES',
    estado: 'MG',
  },
  {
    cidade: 'TRÊS MARIAS',
    estado: 'MG',
  },
  {
    cidade: 'TRÊS PONTAS',
    estado: 'MG',
  },
  {
    cidade: 'TUMIRITINGA',
    estado: 'MG',
  },
  {
    cidade: 'TUPACIGUARA',
    estado: 'MG',
  },
  {
    cidade: 'TURMALINA',
    estado: 'MG',
  },
  {
    cidade: 'TURVOLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'UBÁ',
    estado: 'MG',
  },
  {
    cidade: 'UBAÍ',
    estado: 'MG',
  },
  {
    cidade: 'UBAPORANGA',
    estado: 'MG',
  },
  {
    cidade: 'UBERABA',
    estado: 'MG',
  },
  {
    cidade: 'UBERLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'UMBURATIBA',
    estado: 'MG',
  },
  {
    cidade: 'UNAÍ',
    estado: 'MG',
  },
  {
    cidade: 'UNIÃO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'URUANA DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'URUCÂNIA',
    estado: 'MG',
  },
  {
    cidade: 'URUCUIA',
    estado: 'MG',
  },
  {
    cidade: 'VARGEM ALEGRE',
    estado: 'MG',
  },
  {
    cidade: 'VARGEM BONITA',
    estado: 'MG',
  },
  {
    cidade: 'VARGEM GRANDE DO RIO PARDO',
    estado: 'MG',
  },
  {
    cidade: 'VARGINHA',
    estado: 'MG',
  },
  {
    cidade: 'VARJÃO DE MINAS',
    estado: 'MG',
  },
  {
    cidade: 'VÁRZEA DA PALMA',
    estado: 'MG',
  },
  {
    cidade: 'VARZELÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'VAZANTE',
    estado: 'MG',
  },
  {
    cidade: 'VERDELÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'VEREDINHA',
    estado: 'MG',
  },
  {
    cidade: 'VERÍSSIMO',
    estado: 'MG',
  },
  {
    cidade: 'VERMELHO NOVO',
    estado: 'MG',
  },
  {
    cidade: 'VESPASIANO',
    estado: 'MG',
  },
  {
    cidade: 'VIÇOSA',
    estado: 'MG',
  },
  {
    cidade: 'VIEIRAS',
    estado: 'MG',
  },
  {
    cidade: 'MATHIAS LOBATO',
    estado: 'MG',
  },
  {
    cidade: 'VIRGEM DA LAPA',
    estado: 'MG',
  },
  {
    cidade: 'VIRGÍNIA',
    estado: 'MG',
  },
  {
    cidade: 'VIRGINÓPOLIS',
    estado: 'MG',
  },
  {
    cidade: 'VIRGOLÂNDIA',
    estado: 'MG',
  },
  {
    cidade: 'VISCONDE DO RIO BRANCO',
    estado: 'MG',
  },
  {
    cidade: 'VOLTA GRANDE',
    estado: 'MG',
  },
  {
    cidade: 'WENCESLAU BRAZ',
    estado: 'MG',
  },
  {
    cidade: 'AFONSO CLÁUDIO',
    estado: 'ES',
  },
  {
    cidade: 'ÁGUIA BRANCA',
    estado: 'ES',
  },
  {
    cidade: 'ÁGUA DOCE DO NORTE',
    estado: 'ES',
  },
  {
    cidade: 'ALEGRE',
    estado: 'ES',
  },
  {
    cidade: 'ALFREDO CHAVES',
    estado: 'ES',
  },
  {
    cidade: 'ALTO RIO NOVO',
    estado: 'ES',
  },
  {
    cidade: 'ANCHIETA',
    estado: 'ES',
  },
  {
    cidade: 'APIACÁ',
    estado: 'ES',
  },
  {
    cidade: 'ARACRUZ',
    estado: 'ES',
  },
  {
    cidade: 'ATÍLIO VIVÁCQUA',
    estado: 'ES',
  },
  {
    cidade: 'BAIXO GUANDU',
    estado: 'ES',
  },
  {
    cidade: 'BARRA DE SÃO FRANCISCO',
    estado: 'ES',
  },
  {
    cidade: 'BOA ESPERANÇA',
    estado: 'ES',
  },
  {
    cidade: 'BOM JESUS DO NORTE',
    estado: 'ES',
  },
  {
    cidade: 'BREJETUBA',
    estado: 'ES',
  },
  {
    cidade: 'CACHOEIRO DE ITAPEMIRIM',
    estado: 'ES',
  },
  {
    cidade: 'CARIACICA',
    estado: 'ES',
  },
  {
    cidade: 'CASTELO',
    estado: 'ES',
  },
  {
    cidade: 'COLATINA',
    estado: 'ES',
  },
  {
    cidade: 'CONCEIÇÃO DA BARRA',
    estado: 'ES',
  },
  {
    cidade: 'CONCEIÇÃO DO CASTELO',
    estado: 'ES',
  },
  {
    cidade: 'DIVINO DE SÃO LOURENÇO',
    estado: 'ES',
  },
  {
    cidade: 'DOMINGOS MARTINS',
    estado: 'ES',
  },
  {
    cidade: 'DORES DO RIO PRETO',
    estado: 'ES',
  },
  {
    cidade: 'ECOPORANGA',
    estado: 'ES',
  },
  {
    cidade: 'FUNDÃO',
    estado: 'ES',
  },
  {
    cidade: 'GOVERNADOR LINDENBERG',
    estado: 'ES',
  },
  {
    cidade: 'GUAÇUÍ',
    estado: 'ES',
  },
  {
    cidade: 'GUARAPARI',
    estado: 'ES',
  },
  {
    cidade: 'IBATIBA',
    estado: 'ES',
  },
  {
    cidade: 'IBIRAÇU',
    estado: 'ES',
  },
  {
    cidade: 'IBITIRAMA',
    estado: 'ES',
  },
  {
    cidade: 'ICONHA',
    estado: 'ES',
  },
  {
    cidade: 'IRUPI',
    estado: 'ES',
  },
  {
    cidade: 'ITAGUAÇU',
    estado: 'ES',
  },
  {
    cidade: 'ITAPEMIRIM',
    estado: 'ES',
  },
  {
    cidade: 'ITARANA',
    estado: 'ES',
  },
  {
    cidade: 'IÚNA',
    estado: 'ES',
  },
  {
    cidade: 'JAGUARÉ',
    estado: 'ES',
  },
  {
    cidade: 'JERÔNIMO MONTEIRO',
    estado: 'ES',
  },
  {
    cidade: 'JOÃO NEIVA',
    estado: 'ES',
  },
  {
    cidade: 'LARANJA DA TERRA',
    estado: 'ES',
  },
  {
    cidade: 'LINHARES',
    estado: 'ES',
  },
  {
    cidade: 'MANTENÓPOLIS',
    estado: 'ES',
  },
  {
    cidade: 'MARATAÍZES',
    estado: 'ES',
  },
  {
    cidade: 'MARECHAL FLORIANO',
    estado: 'ES',
  },
  {
    cidade: 'MARILÂNDIA',
    estado: 'ES',
  },
  {
    cidade: 'MIMOSO DO SUL',
    estado: 'ES',
  },
  {
    cidade: 'MONTANHA',
    estado: 'ES',
  },
  {
    cidade: 'MUCURICI',
    estado: 'ES',
  },
  {
    cidade: 'MUNIZ FREIRE',
    estado: 'ES',
  },
  {
    cidade: 'MUQUI',
    estado: 'ES',
  },
  {
    cidade: 'NOVA VENÉCIA',
    estado: 'ES',
  },
  {
    cidade: 'PANCAS',
    estado: 'ES',
  },
  {
    cidade: 'PEDRO CANÁRIO',
    estado: 'ES',
  },
  {
    cidade: 'PINHEIROS',
    estado: 'ES',
  },
  {
    cidade: 'PIÚMA',
    estado: 'ES',
  },
  {
    cidade: 'PONTO BELO',
    estado: 'ES',
  },
  {
    cidade: 'PRESIDENTE KENNEDY',
    estado: 'ES',
  },
  {
    cidade: 'RIO BANANAL',
    estado: 'ES',
  },
  {
    cidade: 'RIO NOVO DO SUL',
    estado: 'ES',
  },
  {
    cidade: 'SANTA LEOPOLDINA',
    estado: 'ES',
  },
  {
    cidade: 'SANTA MARIA DE JETIBÁ',
    estado: 'ES',
  },
  {
    cidade: 'SANTA TERESA',
    estado: 'ES',
  },
  {
    cidade: 'SÃO DOMINGOS DO NORTE',
    estado: 'ES',
  },
  {
    cidade: 'SÃO GABRIEL DA PALHA',
    estado: 'ES',
  },
  {
    cidade: 'SÃO JOSÉ DO CALÇADO',
    estado: 'ES',
  },
  {
    cidade: 'SÃO MATEUS',
    estado: 'ES',
  },
  {
    cidade: 'SÃO ROQUE DO CANAÃ',
    estado: 'ES',
  },
  {
    cidade: 'SERRA',
    estado: 'ES',
  },
  {
    cidade: 'SOORETAMA',
    estado: 'ES',
  },
  {
    cidade: 'VARGEM ALTA',
    estado: 'ES',
  },
  {
    cidade: 'VENDA NOVA DO IMIGRANTE',
    estado: 'ES',
  },
  {
    cidade: 'VIANA',
    estado: 'ES',
  },
  {
    cidade: 'VILA PAVÃO',
    estado: 'ES',
  },
  {
    cidade: 'VILA VALÉRIO',
    estado: 'ES',
  },
  {
    cidade: 'VILA VELHA',
    estado: 'ES',
  },
  {
    cidade: 'VITÓRIA',
    estado: 'ES',
  },
  {
    cidade: 'ANGRA DOS REIS',
    estado: 'RJ',
  },
  {
    cidade: 'APERIBÉ',
    estado: 'RJ',
  },
  {
    cidade: 'ARARUAMA',
    estado: 'RJ',
  },
  {
    cidade: 'AREAL',
    estado: 'RJ',
  },
  {
    cidade: 'ARMAÇÃO DOS BÚZIOS',
    estado: 'RJ',
  },
  {
    cidade: 'ARRAIAL DO CABO',
    estado: 'RJ',
  },
  {
    cidade: 'BARRA DO PIRAÍ',
    estado: 'RJ',
  },
  {
    cidade: 'BARRA MANSA',
    estado: 'RJ',
  },
  {
    cidade: 'BELFORD ROXO',
    estado: 'RJ',
  },
  {
    cidade: 'BOM JARDIM',
    estado: 'RJ',
  },
  {
    cidade: 'BOM JESUS DO ITABAPOANA',
    estado: 'RJ',
  },
  {
    cidade: 'CABO FRIO',
    estado: 'RJ',
  },
  {
    cidade: 'CACHOEIRAS DE MACACU',
    estado: 'RJ',
  },
  {
    cidade: 'CAMBUCI',
    estado: 'RJ',
  },
  {
    cidade: 'CARAPEBUS',
    estado: 'RJ',
  },
  {
    cidade: 'COMENDADOR LEVY GASPARIAN',
    estado: 'RJ',
  },
  {
    cidade: 'CAMPOS DOS GOYTACAZES',
    estado: 'RJ',
  },
  {
    cidade: 'CANTAGALO',
    estado: 'RJ',
  },
  {
    cidade: 'CARDOSO MOREIRA',
    estado: 'RJ',
  },
  {
    cidade: 'CARMO',
    estado: 'RJ',
  },
  {
    cidade: 'CASIMIRO DE ABREU',
    estado: 'RJ',
  },
  {
    cidade: 'CONCEIÇÃO DE MACABU',
    estado: 'RJ',
  },
  {
    cidade: 'CORDEIRO',
    estado: 'RJ',
  },
  {
    cidade: 'DUAS BARRAS',
    estado: 'RJ',
  },
  {
    cidade: 'DUQUE DE CAXIAS',
    estado: 'RJ',
  },
  {
    cidade: 'ENGENHEIRO PAULO DE FRONTIN',
    estado: 'RJ',
  },
  {
    cidade: 'GUAPIMIRIM',
    estado: 'RJ',
  },
  {
    cidade: 'IGUABA GRANDE',
    estado: 'RJ',
  },
  {
    cidade: 'ITABORAÍ',
    estado: 'RJ',
  },
  {
    cidade: 'ITAGUAÍ',
    estado: 'RJ',
  },
  {
    cidade: 'ITALVA',
    estado: 'RJ',
  },
  {
    cidade: 'ITAOCARA',
    estado: 'RJ',
  },
  {
    cidade: 'ITAPERUNA',
    estado: 'RJ',
  },
  {
    cidade: 'ITATIAIA',
    estado: 'RJ',
  },
  {
    cidade: 'JAPERI',
    estado: 'RJ',
  },
  {
    cidade: 'LAJE DO MURIAÉ',
    estado: 'RJ',
  },
  {
    cidade: 'MACAÉ',
    estado: 'RJ',
  },
  {
    cidade: 'MACUCO',
    estado: 'RJ',
  },
  {
    cidade: 'MAGÉ',
    estado: 'RJ',
  },
  {
    cidade: 'MANGARATIBA',
    estado: 'RJ',
  },
  {
    cidade: 'MARICÁ',
    estado: 'RJ',
  },
  {
    cidade: 'MENDES',
    estado: 'RJ',
  },
  {
    cidade: 'MESQUITA',
    estado: 'RJ',
  },
  {
    cidade: 'MIGUEL PEREIRA',
    estado: 'RJ',
  },
  {
    cidade: 'MIRACEMA',
    estado: 'RJ',
  },
  {
    cidade: 'NATIVIDADE',
    estado: 'RJ',
  },
  {
    cidade: 'NILÓPOLIS',
    estado: 'RJ',
  },
  {
    cidade: 'NITERÓI',
    estado: 'RJ',
  },
  {
    cidade: 'NOVA FRIBURGO',
    estado: 'RJ',
  },
  {
    cidade: 'NOVA IGUAÇU',
    estado: 'RJ',
  },
  {
    cidade: 'PARACAMBI',
    estado: 'RJ',
  },
  {
    cidade: 'PARAÍBA DO SUL',
    estado: 'RJ',
  },
  {
    cidade: 'PARATY',
    estado: 'RJ',
  },
  {
    cidade: 'PATY DO ALFERES',
    estado: 'RJ',
  },
  {
    cidade: 'PETRÓPOLIS',
    estado: 'RJ',
  },
  {
    cidade: 'PINHEIRAL',
    estado: 'RJ',
  },
  {
    cidade: 'PIRAÍ',
    estado: 'RJ',
  },
  {
    cidade: 'PORCIÚNCULA',
    estado: 'RJ',
  },
  {
    cidade: 'PORTO REAL',
    estado: 'RJ',
  },
  {
    cidade: 'QUATIS',
    estado: 'RJ',
  },
  {
    cidade: 'QUEIMADOS',
    estado: 'RJ',
  },
  {
    cidade: 'QUISSAMÃ',
    estado: 'RJ',
  },
  {
    cidade: 'RESENDE',
    estado: 'RJ',
  },
  {
    cidade: 'RIO BONITO',
    estado: 'RJ',
  },
  {
    cidade: 'RIO CLARO',
    estado: 'RJ',
  },
  {
    cidade: 'RIO DAS FLORES',
    estado: 'RJ',
  },
  {
    cidade: 'RIO DAS OSTRAS',
    estado: 'RJ',
  },
  {
    cidade: 'RIO DE JANEIRO',
    estado: 'RJ',
  },
  {
    cidade: 'SANTA MARIA MADALENA',
    estado: 'RJ',
  },
  {
    cidade: 'SANTO ANTÔNIO DE PÁDUA',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO FRANCISCO DE ITABAPOANA',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO FIDÉLIS',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO GONÇALO',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO JOÃO DA BARRA',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO JOÃO DE MERITI',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO JOSÉ DE UBÁ',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO JOSÉ DO VALE DO RIO PRETO',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO PEDRO DA ALDEIA',
    estado: 'RJ',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO ALTO',
    estado: 'RJ',
  },
  {
    cidade: 'SAPUCAIA',
    estado: 'RJ',
  },
  {
    cidade: 'SAQUAREMA',
    estado: 'RJ',
  },
  {
    cidade: 'SEROPÉDICA',
    estado: 'RJ',
  },
  {
    cidade: 'SILVA JARDIM',
    estado: 'RJ',
  },
  {
    cidade: 'SUMIDOURO',
    estado: 'RJ',
  },
  {
    cidade: 'TANGUÁ',
    estado: 'RJ',
  },
  {
    cidade: 'TERESÓPOLIS',
    estado: 'RJ',
  },
  {
    cidade: 'TRAJANO DE MORAES',
    estado: 'RJ',
  },
  {
    cidade: 'TRÊS RIOS',
    estado: 'RJ',
  },
  {
    cidade: 'VALENÇA',
    estado: 'RJ',
  },
  {
    cidade: 'VARRE-SAI',
    estado: 'RJ',
  },
  {
    cidade: 'VASSOURAS',
    estado: 'RJ',
  },
  {
    cidade: 'VOLTA REDONDA',
    estado: 'RJ',
  },
  {
    cidade: 'ADAMANTINA',
    estado: 'SP',
  },
  {
    cidade: 'ADOLFO',
    estado: 'SP',
  },
  {
    cidade: 'AGUAÍ',
    estado: 'SP',
  },
  {
    cidade: 'ÁGUAS DA PRATA',
    estado: 'SP',
  },
  {
    cidade: 'ÁGUAS DE LINDÓIA',
    estado: 'SP',
  },
  {
    cidade: 'ÁGUAS DE SANTA BÁRBARA',
    estado: 'SP',
  },
  {
    cidade: 'ÁGUAS DE SÃO PEDRO',
    estado: 'SP',
  },
  {
    cidade: 'AGUDOS',
    estado: 'SP',
  },
  {
    cidade: 'ALAMBARI',
    estado: 'SP',
  },
  {
    cidade: 'ALFREDO MARCONDES',
    estado: 'SP',
  },
  {
    cidade: 'ALTAIR',
    estado: 'SP',
  },
  {
    cidade: 'ALTINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'ALTO ALEGRE',
    estado: 'SP',
  },
  {
    cidade: 'ALUMÍNIO',
    estado: 'SP',
  },
  {
    cidade: 'ÁLVARES FLORENCE',
    estado: 'SP',
  },
  {
    cidade: 'ÁLVARES MACHADO',
    estado: 'SP',
  },
  {
    cidade: 'ÁLVARO DE CARVALHO',
    estado: 'SP',
  },
  {
    cidade: 'ALVINLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'AMERICANA',
    estado: 'SP',
  },
  {
    cidade: 'AMÉRICO BRASILIENSE',
    estado: 'SP',
  },
  {
    cidade: 'AMÉRICO DE CAMPOS',
    estado: 'SP',
  },
  {
    cidade: 'AMPARO',
    estado: 'SP',
  },
  {
    cidade: 'ANALÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'ANDRADINA',
    estado: 'SP',
  },
  {
    cidade: 'ANGATUBA',
    estado: 'SP',
  },
  {
    cidade: 'ANHEMBI',
    estado: 'SP',
  },
  {
    cidade: 'ANHUMAS',
    estado: 'SP',
  },
  {
    cidade: 'APARECIDA',
    estado: 'SP',
  },
  {
    cidade: "APARECIDA D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'APIAÍ',
    estado: 'SP',
  },
  {
    cidade: 'ARAÇARIGUAMA',
    estado: 'SP',
  },
  {
    cidade: 'ARAÇATUBA',
    estado: 'SP',
  },
  {
    cidade: 'ARAÇOIABA DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'ARAMINA',
    estado: 'SP',
  },
  {
    cidade: 'ARANDU',
    estado: 'SP',
  },
  {
    cidade: 'ARAPEÍ',
    estado: 'SP',
  },
  {
    cidade: 'ARARAQUARA',
    estado: 'SP',
  },
  {
    cidade: 'ARARAS',
    estado: 'SP',
  },
  {
    cidade: 'ARCO-ÍRIS',
    estado: 'SP',
  },
  {
    cidade: 'AREALVA',
    estado: 'SP',
  },
  {
    cidade: 'AREIAS',
    estado: 'SP',
  },
  {
    cidade: 'AREIÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'ARIRANHA',
    estado: 'SP',
  },
  {
    cidade: 'ARTUR NOGUEIRA',
    estado: 'SP',
  },
  {
    cidade: 'ARUJÁ',
    estado: 'SP',
  },
  {
    cidade: 'ASPÁSIA',
    estado: 'SP',
  },
  {
    cidade: 'ASSIS',
    estado: 'SP',
  },
  {
    cidade: 'ATIBAIA',
    estado: 'SP',
  },
  {
    cidade: 'AURIFLAMA',
    estado: 'SP',
  },
  {
    cidade: 'AVAÍ',
    estado: 'SP',
  },
  {
    cidade: 'AVANHANDAVA',
    estado: 'SP',
  },
  {
    cidade: 'AVARÉ',
    estado: 'SP',
  },
  {
    cidade: 'BADY BASSITT',
    estado: 'SP',
  },
  {
    cidade: 'BALBINOS',
    estado: 'SP',
  },
  {
    cidade: 'BÁLSAMO',
    estado: 'SP',
  },
  {
    cidade: 'BANANAL',
    estado: 'SP',
  },
  {
    cidade: 'BARÃO DE ANTONINA',
    estado: 'SP',
  },
  {
    cidade: 'BARBOSA',
    estado: 'SP',
  },
  {
    cidade: 'BARIRI',
    estado: 'SP',
  },
  {
    cidade: 'BARRA BONITA',
    estado: 'SP',
  },
  {
    cidade: 'BARRA DO CHAPÉU',
    estado: 'SP',
  },
  {
    cidade: 'BARRA DO TURVO',
    estado: 'SP',
  },
  {
    cidade: 'BARRETOS',
    estado: 'SP',
  },
  {
    cidade: 'BARRINHA',
    estado: 'SP',
  },
  {
    cidade: 'BARUERI',
    estado: 'SP',
  },
  {
    cidade: 'BASTOS',
    estado: 'SP',
  },
  {
    cidade: 'BATATAIS',
    estado: 'SP',
  },
  {
    cidade: 'BAURU',
    estado: 'SP',
  },
  {
    cidade: 'BEBEDOURO',
    estado: 'SP',
  },
  {
    cidade: 'BENTO DE ABREU',
    estado: 'SP',
  },
  {
    cidade: 'BERNARDINO DE CAMPOS',
    estado: 'SP',
  },
  {
    cidade: 'BERTIOGA',
    estado: 'SP',
  },
  {
    cidade: 'BILAC',
    estado: 'SP',
  },
  {
    cidade: 'BIRIGUI',
    estado: 'SP',
  },
  {
    cidade: 'BIRITIBA MIRIM',
    estado: 'SP',
  },
  {
    cidade: 'BOA ESPERANÇA DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'BOCAINA',
    estado: 'SP',
  },
  {
    cidade: 'BOFETE',
    estado: 'SP',
  },
  {
    cidade: 'BOITUVA',
    estado: 'SP',
  },
  {
    cidade: 'BOM JESUS DOS PERDÕES',
    estado: 'SP',
  },
  {
    cidade: 'BOM SUCESSO DE ITARARÉ',
    estado: 'SP',
  },
  {
    cidade: 'BORÁ',
    estado: 'SP',
  },
  {
    cidade: 'BORACÉIA',
    estado: 'SP',
  },
  {
    cidade: 'BORBOREMA',
    estado: 'SP',
  },
  {
    cidade: 'BOREBI',
    estado: 'SP',
  },
  {
    cidade: 'BOTUCATU',
    estado: 'SP',
  },
  {
    cidade: 'BRAGANÇA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'BRAÚNA',
    estado: 'SP',
  },
  {
    cidade: 'BREJO ALEGRE',
    estado: 'SP',
  },
  {
    cidade: 'BRODOWSKI',
    estado: 'SP',
  },
  {
    cidade: 'BROTAS',
    estado: 'SP',
  },
  {
    cidade: 'BURI',
    estado: 'SP',
  },
  {
    cidade: 'BURITAMA',
    estado: 'SP',
  },
  {
    cidade: 'BURITIZAL',
    estado: 'SP',
  },
  {
    cidade: 'CABRÁLIA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'CABREÚVA',
    estado: 'SP',
  },
  {
    cidade: 'CAÇAPAVA',
    estado: 'SP',
  },
  {
    cidade: 'CACHOEIRA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'CACONDE',
    estado: 'SP',
  },
  {
    cidade: 'CAFELÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'CAIABU',
    estado: 'SP',
  },
  {
    cidade: 'CAIEIRAS',
    estado: 'SP',
  },
  {
    cidade: 'CAIUÁ',
    estado: 'SP',
  },
  {
    cidade: 'CAJAMAR',
    estado: 'SP',
  },
  {
    cidade: 'CAJATI',
    estado: 'SP',
  },
  {
    cidade: 'CAJOBI',
    estado: 'SP',
  },
  {
    cidade: 'CAJURU',
    estado: 'SP',
  },
  {
    cidade: 'CAMPINA DO MONTE ALEGRE',
    estado: 'SP',
  },
  {
    cidade: 'CAMPINAS',
    estado: 'SP',
  },
  {
    cidade: 'CAMPO LIMPO PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'CAMPOS DO JORDÃO',
    estado: 'SP',
  },
  {
    cidade: 'CAMPOS NOVOS PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'CANANÉIA',
    estado: 'SP',
  },
  {
    cidade: 'CANAS',
    estado: 'SP',
  },
  {
    cidade: 'CÂNDIDO MOTA',
    estado: 'SP',
  },
  {
    cidade: 'CÂNDIDO RODRIGUES',
    estado: 'SP',
  },
  {
    cidade: 'CANITAR',
    estado: 'SP',
  },
  {
    cidade: 'CAPÃO BONITO',
    estado: 'SP',
  },
  {
    cidade: 'CAPELA DO ALTO',
    estado: 'SP',
  },
  {
    cidade: 'CAPIVARI',
    estado: 'SP',
  },
  {
    cidade: 'CARAGUATATUBA',
    estado: 'SP',
  },
  {
    cidade: 'CARAPICUÍBA',
    estado: 'SP',
  },
  {
    cidade: 'CARDOSO',
    estado: 'SP',
  },
  {
    cidade: 'CASA BRANCA',
    estado: 'SP',
  },
  {
    cidade: 'CÁSSIA DOS COQUEIROS',
    estado: 'SP',
  },
  {
    cidade: 'CASTILHO',
    estado: 'SP',
  },
  {
    cidade: 'CATANDUVA',
    estado: 'SP',
  },
  {
    cidade: 'CATIGUÁ',
    estado: 'SP',
  },
  {
    cidade: 'CEDRAL',
    estado: 'SP',
  },
  {
    cidade: 'CERQUEIRA CÉSAR',
    estado: 'SP',
  },
  {
    cidade: 'CERQUILHO',
    estado: 'SP',
  },
  {
    cidade: 'CESÁRIO LANGE',
    estado: 'SP',
  },
  {
    cidade: 'CHARQUEADA',
    estado: 'SP',
  },
  {
    cidade: 'CLEMENTINA',
    estado: 'SP',
  },
  {
    cidade: 'COLINA',
    estado: 'SP',
  },
  {
    cidade: 'COLÔMBIA',
    estado: 'SP',
  },
  {
    cidade: 'CONCHAL',
    estado: 'SP',
  },
  {
    cidade: 'CONCHAS',
    estado: 'SP',
  },
  {
    cidade: 'CORDEIRÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'COROADOS',
    estado: 'SP',
  },
  {
    cidade: 'CORONEL MACEDO',
    estado: 'SP',
  },
  {
    cidade: 'CORUMBATAÍ',
    estado: 'SP',
  },
  {
    cidade: 'COSMÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'COSMORAMA',
    estado: 'SP',
  },
  {
    cidade: 'COTIA',
    estado: 'SP',
  },
  {
    cidade: 'CRAVINHOS',
    estado: 'SP',
  },
  {
    cidade: 'CRISTAIS PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'CRUZÁLIA',
    estado: 'SP',
  },
  {
    cidade: 'CRUZEIRO',
    estado: 'SP',
  },
  {
    cidade: 'CUBATÃO',
    estado: 'SP',
  },
  {
    cidade: 'CUNHA',
    estado: 'SP',
  },
  {
    cidade: 'DESCALVADO',
    estado: 'SP',
  },
  {
    cidade: 'DIADEMA',
    estado: 'SP',
  },
  {
    cidade: 'DIRCE REIS',
    estado: 'SP',
  },
  {
    cidade: 'DIVINOLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'DOBRADA',
    estado: 'SP',
  },
  {
    cidade: 'DOIS CÓRREGOS',
    estado: 'SP',
  },
  {
    cidade: 'DOLCINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'DOURADO',
    estado: 'SP',
  },
  {
    cidade: 'DRACENA',
    estado: 'SP',
  },
  {
    cidade: 'DUARTINA',
    estado: 'SP',
  },
  {
    cidade: 'DUMONT',
    estado: 'SP',
  },
  {
    cidade: 'ECHAPORÃ',
    estado: 'SP',
  },
  {
    cidade: 'ELDORADO',
    estado: 'SP',
  },
  {
    cidade: 'ELIAS FAUSTO',
    estado: 'SP',
  },
  {
    cidade: 'ELISIÁRIO',
    estado: 'SP',
  },
  {
    cidade: 'EMBAÚBA',
    estado: 'SP',
  },
  {
    cidade: 'EMBU DAS ARTES',
    estado: 'SP',
  },
  {
    cidade: 'EMBU-GUAÇU',
    estado: 'SP',
  },
  {
    cidade: 'EMILIANÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'ENGENHEIRO COELHO',
    estado: 'SP',
  },
  {
    cidade: 'ESPÍRITO SANTO DO PINHAL',
    estado: 'SP',
  },
  {
    cidade: 'ESPÍRITO SANTO DO TURVO',
    estado: 'SP',
  },
  {
    cidade: "ESTRELA D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'ESTRELA DO NORTE',
    estado: 'SP',
  },
  {
    cidade: 'EUCLIDES DA CUNHA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'FARTURA',
    estado: 'SP',
  },
  {
    cidade: 'FERNANDÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'FERNANDO PRESTES',
    estado: 'SP',
  },
  {
    cidade: 'FERNÃO',
    estado: 'SP',
  },
  {
    cidade: 'FERRAZ DE VASCONCELOS',
    estado: 'SP',
  },
  {
    cidade: 'FLORA RICA',
    estado: 'SP',
  },
  {
    cidade: 'FLOREAL',
    estado: 'SP',
  },
  {
    cidade: 'FLÓRIDA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'FLORÍNEA',
    estado: 'SP',
  },
  {
    cidade: 'FRANCA',
    estado: 'SP',
  },
  {
    cidade: 'FRANCISCO MORATO',
    estado: 'SP',
  },
  {
    cidade: 'FRANCO DA ROCHA',
    estado: 'SP',
  },
  {
    cidade: 'GABRIEL MONTEIRO',
    estado: 'SP',
  },
  {
    cidade: 'GÁLIA',
    estado: 'SP',
  },
  {
    cidade: 'GARÇA',
    estado: 'SP',
  },
  {
    cidade: 'GASTÃO VIDIGAL',
    estado: 'SP',
  },
  {
    cidade: 'GAVIÃO PEIXOTO',
    estado: 'SP',
  },
  {
    cidade: 'GENERAL SALGADO',
    estado: 'SP',
  },
  {
    cidade: 'GETULINA',
    estado: 'SP',
  },
  {
    cidade: 'GLICÉRIO',
    estado: 'SP',
  },
  {
    cidade: 'GUAIÇARA',
    estado: 'SP',
  },
  {
    cidade: 'GUAIMBÊ',
    estado: 'SP',
  },
  {
    cidade: 'GUAÍRA',
    estado: 'SP',
  },
  {
    cidade: 'GUAPIAÇU',
    estado: 'SP',
  },
  {
    cidade: 'GUAPIARA',
    estado: 'SP',
  },
  {
    cidade: 'GUARÁ',
    estado: 'SP',
  },
  {
    cidade: 'GUARAÇAÍ',
    estado: 'SP',
  },
  {
    cidade: 'GUARACI',
    estado: 'SP',
  },
  {
    cidade: "GUARANI D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'GUARANTÃ',
    estado: 'SP',
  },
  {
    cidade: 'GUARARAPES',
    estado: 'SP',
  },
  {
    cidade: 'GUARAREMA',
    estado: 'SP',
  },
  {
    cidade: 'GUARATINGUETÁ',
    estado: 'SP',
  },
  {
    cidade: 'GUAREÍ',
    estado: 'SP',
  },
  {
    cidade: 'GUARIBA',
    estado: 'SP',
  },
  {
    cidade: 'GUARUJÁ',
    estado: 'SP',
  },
  {
    cidade: 'GUARULHOS',
    estado: 'SP',
  },
  {
    cidade: 'GUATAPARÁ',
    estado: 'SP',
  },
  {
    cidade: 'GUZOLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'HERCULÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'HOLAMBRA',
    estado: 'SP',
  },
  {
    cidade: 'HORTOLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'IACANGA',
    estado: 'SP',
  },
  {
    cidade: 'IACRI',
    estado: 'SP',
  },
  {
    cidade: 'IARAS',
    estado: 'SP',
  },
  {
    cidade: 'IBATÉ',
    estado: 'SP',
  },
  {
    cidade: 'IBIRÁ',
    estado: 'SP',
  },
  {
    cidade: 'IBIRAREMA',
    estado: 'SP',
  },
  {
    cidade: 'IBITINGA',
    estado: 'SP',
  },
  {
    cidade: 'IBIÚNA',
    estado: 'SP',
  },
  {
    cidade: 'ICÉM',
    estado: 'SP',
  },
  {
    cidade: 'IEPÊ',
    estado: 'SP',
  },
  {
    cidade: 'IGARAÇU DO TIETÊ',
    estado: 'SP',
  },
  {
    cidade: 'IGARAPAVA',
    estado: 'SP',
  },
  {
    cidade: 'IGARATÁ',
    estado: 'SP',
  },
  {
    cidade: 'IGUAPE',
    estado: 'SP',
  },
  {
    cidade: 'ILHABELA',
    estado: 'SP',
  },
  {
    cidade: 'ILHA COMPRIDA',
    estado: 'SP',
  },
  {
    cidade: 'ILHA SOLTEIRA',
    estado: 'SP',
  },
  {
    cidade: 'INDAIATUBA',
    estado: 'SP',
  },
  {
    cidade: 'INDIANA',
    estado: 'SP',
  },
  {
    cidade: 'INDIAPORÃ',
    estado: 'SP',
  },
  {
    cidade: 'INÚBIA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'IPAUSSU',
    estado: 'SP',
  },
  {
    cidade: 'IPERÓ',
    estado: 'SP',
  },
  {
    cidade: 'IPEÚNA',
    estado: 'SP',
  },
  {
    cidade: 'IPIGUÁ',
    estado: 'SP',
  },
  {
    cidade: 'IPORANGA',
    estado: 'SP',
  },
  {
    cidade: 'IPUÃ',
    estado: 'SP',
  },
  {
    cidade: 'IRACEMÁPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'IRAPUÃ',
    estado: 'SP',
  },
  {
    cidade: 'IRAPURU',
    estado: 'SP',
  },
  {
    cidade: 'ITABERÁ',
    estado: 'SP',
  },
  {
    cidade: 'ITAÍ',
    estado: 'SP',
  },
  {
    cidade: 'ITAJOBI',
    estado: 'SP',
  },
  {
    cidade: 'ITAJU',
    estado: 'SP',
  },
  {
    cidade: 'ITANHAÉM',
    estado: 'SP',
  },
  {
    cidade: 'ITAOCA',
    estado: 'SP',
  },
  {
    cidade: 'ITAPECERICA DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'ITAPETININGA',
    estado: 'SP',
  },
  {
    cidade: 'ITAPEVA',
    estado: 'SP',
  },
  {
    cidade: 'ITAPEVI',
    estado: 'SP',
  },
  {
    cidade: 'ITAPIRA',
    estado: 'SP',
  },
  {
    cidade: 'ITAPIRAPUÃ PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'ITÁPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'ITAPORANGA',
    estado: 'SP',
  },
  {
    cidade: 'ITAPUÍ',
    estado: 'SP',
  },
  {
    cidade: 'ITAPURA',
    estado: 'SP',
  },
  {
    cidade: 'ITAQUAQUECETUBA',
    estado: 'SP',
  },
  {
    cidade: 'ITARARÉ',
    estado: 'SP',
  },
  {
    cidade: 'ITARIRI',
    estado: 'SP',
  },
  {
    cidade: 'ITATIBA',
    estado: 'SP',
  },
  {
    cidade: 'ITATINGA',
    estado: 'SP',
  },
  {
    cidade: 'ITIRAPINA',
    estado: 'SP',
  },
  {
    cidade: 'ITIRAPUÃ',
    estado: 'SP',
  },
  {
    cidade: 'ITOBI',
    estado: 'SP',
  },
  {
    cidade: 'ITU',
    estado: 'SP',
  },
  {
    cidade: 'ITUPEVA',
    estado: 'SP',
  },
  {
    cidade: 'ITUVERAVA',
    estado: 'SP',
  },
  {
    cidade: 'JABORANDI',
    estado: 'SP',
  },
  {
    cidade: 'JABOTICABAL',
    estado: 'SP',
  },
  {
    cidade: 'JACAREÍ',
    estado: 'SP',
  },
  {
    cidade: 'JACI',
    estado: 'SP',
  },
  {
    cidade: 'JACUPIRANGA',
    estado: 'SP',
  },
  {
    cidade: 'JAGUARIÚNA',
    estado: 'SP',
  },
  {
    cidade: 'JALES',
    estado: 'SP',
  },
  {
    cidade: 'JAMBEIRO',
    estado: 'SP',
  },
  {
    cidade: 'JANDIRA',
    estado: 'SP',
  },
  {
    cidade: 'JARDINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'JARINU',
    estado: 'SP',
  },
  {
    cidade: 'JAÚ',
    estado: 'SP',
  },
  {
    cidade: 'JERIQUARA',
    estado: 'SP',
  },
  {
    cidade: 'JOANÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'JOÃO RAMALHO',
    estado: 'SP',
  },
  {
    cidade: 'JOSÉ BONIFÁCIO',
    estado: 'SP',
  },
  {
    cidade: 'JÚLIO MESQUITA',
    estado: 'SP',
  },
  {
    cidade: 'JUMIRIM',
    estado: 'SP',
  },
  {
    cidade: 'JUNDIAÍ',
    estado: 'SP',
  },
  {
    cidade: 'JUNQUEIRÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'JUQUIÁ',
    estado: 'SP',
  },
  {
    cidade: 'JUQUITIBA',
    estado: 'SP',
  },
  {
    cidade: 'LAGOINHA',
    estado: 'SP',
  },
  {
    cidade: 'LARANJAL PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'LAVÍNIA',
    estado: 'SP',
  },
  {
    cidade: 'LAVRINHAS',
    estado: 'SP',
  },
  {
    cidade: 'LEME',
    estado: 'SP',
  },
  {
    cidade: 'LENÇÓIS PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'LIMEIRA',
    estado: 'SP',
  },
  {
    cidade: 'LINDÓIA',
    estado: 'SP',
  },
  {
    cidade: 'LINS',
    estado: 'SP',
  },
  {
    cidade: 'LORENA',
    estado: 'SP',
  },
  {
    cidade: 'LOURDES',
    estado: 'SP',
  },
  {
    cidade: 'LOUVEIRA',
    estado: 'SP',
  },
  {
    cidade: 'LUCÉLIA',
    estado: 'SP',
  },
  {
    cidade: 'LUCIANÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'LUÍS ANTÔNIO',
    estado: 'SP',
  },
  {
    cidade: 'LUIZIÂNIA',
    estado: 'SP',
  },
  {
    cidade: 'LUPÉRCIO',
    estado: 'SP',
  },
  {
    cidade: 'LUTÉCIA',
    estado: 'SP',
  },
  {
    cidade: 'MACATUBA',
    estado: 'SP',
  },
  {
    cidade: 'MACAUBAL',
    estado: 'SP',
  },
  {
    cidade: 'MACEDÔNIA',
    estado: 'SP',
  },
  {
    cidade: 'MAGDA',
    estado: 'SP',
  },
  {
    cidade: 'MAIRINQUE',
    estado: 'SP',
  },
  {
    cidade: 'MAIRIPORÃ',
    estado: 'SP',
  },
  {
    cidade: 'MANDURI',
    estado: 'SP',
  },
  {
    cidade: 'MARABÁ PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'MARACAÍ',
    estado: 'SP',
  },
  {
    cidade: 'MARAPOAMA',
    estado: 'SP',
  },
  {
    cidade: 'MARIÁPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'MARÍLIA',
    estado: 'SP',
  },
  {
    cidade: 'MARINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'MARTINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'MATÃO',
    estado: 'SP',
  },
  {
    cidade: 'MAUÁ',
    estado: 'SP',
  },
  {
    cidade: 'MENDONÇA',
    estado: 'SP',
  },
  {
    cidade: 'MERIDIANO',
    estado: 'SP',
  },
  {
    cidade: 'MESÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'MIGUELÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'MINEIROS DO TIETÊ',
    estado: 'SP',
  },
  {
    cidade: 'MIRACATU',
    estado: 'SP',
  },
  {
    cidade: 'MIRA ESTRELA',
    estado: 'SP',
  },
  {
    cidade: 'MIRANDÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'MIRANTE DO PARANAPANEMA',
    estado: 'SP',
  },
  {
    cidade: 'MIRASSOL',
    estado: 'SP',
  },
  {
    cidade: 'MIRASSOLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'MOCOCA',
    estado: 'SP',
  },
  {
    cidade: 'MOGI DAS CRUZES',
    estado: 'SP',
  },
  {
    cidade: 'MOGI GUAÇU',
    estado: 'SP',
  },
  {
    cidade: 'MOGI MIRIM',
    estado: 'SP',
  },
  {
    cidade: 'MOMBUCA',
    estado: 'SP',
  },
  {
    cidade: 'MONÇÕES',
    estado: 'SP',
  },
  {
    cidade: 'MONGAGUÁ',
    estado: 'SP',
  },
  {
    cidade: 'MONTE ALEGRE DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'MONTE ALTO',
    estado: 'SP',
  },
  {
    cidade: 'MONTE APRAZÍVEL',
    estado: 'SP',
  },
  {
    cidade: 'MONTE AZUL PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'MONTE CASTELO',
    estado: 'SP',
  },
  {
    cidade: 'MONTEIRO LOBATO',
    estado: 'SP',
  },
  {
    cidade: 'MONTE MOR',
    estado: 'SP',
  },
  {
    cidade: 'MORRO AGUDO',
    estado: 'SP',
  },
  {
    cidade: 'MORUNGABA',
    estado: 'SP',
  },
  {
    cidade: 'MOTUCA',
    estado: 'SP',
  },
  {
    cidade: 'MURUTINGA DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'NANTES',
    estado: 'SP',
  },
  {
    cidade: 'NARANDIBA',
    estado: 'SP',
  },
  {
    cidade: 'NATIVIDADE DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'NAZARÉ PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'NEVES PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'NHANDEARA',
    estado: 'SP',
  },
  {
    cidade: 'NIPOÃ',
    estado: 'SP',
  },
  {
    cidade: 'NOVA ALIANÇA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA CAMPINA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA CANAÃ PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA CASTILHO',
    estado: 'SP',
  },
  {
    cidade: 'NOVA EUROPA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA GRANADA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA GUATAPORANGA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA INDEPENDÊNCIA',
    estado: 'SP',
  },
  {
    cidade: 'NOVAIS',
    estado: 'SP',
  },
  {
    cidade: 'NOVA LUZITÂNIA',
    estado: 'SP',
  },
  {
    cidade: 'NOVA ODESSA',
    estado: 'SP',
  },
  {
    cidade: 'NOVO HORIZONTE',
    estado: 'SP',
  },
  {
    cidade: 'NUPORANGA',
    estado: 'SP',
  },
  {
    cidade: 'OCAUÇU',
    estado: 'SP',
  },
  {
    cidade: 'ÓLEO',
    estado: 'SP',
  },
  {
    cidade: 'OLÍMPIA',
    estado: 'SP',
  },
  {
    cidade: 'ONDA VERDE',
    estado: 'SP',
  },
  {
    cidade: 'ORIENTE',
    estado: 'SP',
  },
  {
    cidade: 'ORINDIÚVA',
    estado: 'SP',
  },
  {
    cidade: 'ORLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'OSASCO',
    estado: 'SP',
  },
  {
    cidade: 'OSCAR BRESSANE',
    estado: 'SP',
  },
  {
    cidade: 'OSVALDO CRUZ',
    estado: 'SP',
  },
  {
    cidade: 'OURINHOS',
    estado: 'SP',
  },
  {
    cidade: 'OUROESTE',
    estado: 'SP',
  },
  {
    cidade: 'OURO VERDE',
    estado: 'SP',
  },
  {
    cidade: 'PACAEMBU',
    estado: 'SP',
  },
  {
    cidade: 'PALESTINA',
    estado: 'SP',
  },
  {
    cidade: 'PALMARES PAULISTA',
    estado: 'SP',
  },
  {
    cidade: "PALMEIRA D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'PALMITAL',
    estado: 'SP',
  },
  {
    cidade: 'PANORAMA',
    estado: 'SP',
  },
  {
    cidade: 'PARAGUAÇU PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'PARAIBUNA',
    estado: 'SP',
  },
  {
    cidade: 'PARAÍSO',
    estado: 'SP',
  },
  {
    cidade: 'PARANAPANEMA',
    estado: 'SP',
  },
  {
    cidade: 'PARANAPUÃ',
    estado: 'SP',
  },
  {
    cidade: 'PARAPUÃ',
    estado: 'SP',
  },
  {
    cidade: 'PARDINHO',
    estado: 'SP',
  },
  {
    cidade: 'PARIQUERA-AÇU',
    estado: 'SP',
  },
  {
    cidade: 'PARISI',
    estado: 'SP',
  },
  {
    cidade: 'PATROCÍNIO PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'PAULICÉIA',
    estado: 'SP',
  },
  {
    cidade: 'PAULÍNIA',
    estado: 'SP',
  },
  {
    cidade: 'PAULISTÂNIA',
    estado: 'SP',
  },
  {
    cidade: 'PAULO DE FARIA',
    estado: 'SP',
  },
  {
    cidade: 'PEDERNEIRAS',
    estado: 'SP',
  },
  {
    cidade: 'PEDRA BELA',
    estado: 'SP',
  },
  {
    cidade: 'PEDRANÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'PEDREGULHO',
    estado: 'SP',
  },
  {
    cidade: 'PEDREIRA',
    estado: 'SP',
  },
  {
    cidade: 'PEDRINHAS PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'PEDRO DE TOLEDO',
    estado: 'SP',
  },
  {
    cidade: 'PENÁPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'PEREIRA BARRETO',
    estado: 'SP',
  },
  {
    cidade: 'PEREIRAS',
    estado: 'SP',
  },
  {
    cidade: 'PERUÍBE',
    estado: 'SP',
  },
  {
    cidade: 'PIACATU',
    estado: 'SP',
  },
  {
    cidade: 'PIEDADE',
    estado: 'SP',
  },
  {
    cidade: 'PILAR DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'PINDAMONHANGABA',
    estado: 'SP',
  },
  {
    cidade: 'PINDORAMA',
    estado: 'SP',
  },
  {
    cidade: 'PINHALZINHO',
    estado: 'SP',
  },
  {
    cidade: 'PIQUEROBI',
    estado: 'SP',
  },
  {
    cidade: 'PIQUETE',
    estado: 'SP',
  },
  {
    cidade: 'PIRACAIA',
    estado: 'SP',
  },
  {
    cidade: 'PIRACICABA',
    estado: 'SP',
  },
  {
    cidade: 'PIRAJU',
    estado: 'SP',
  },
  {
    cidade: 'PIRAJUÍ',
    estado: 'SP',
  },
  {
    cidade: 'PIRANGI',
    estado: 'SP',
  },
  {
    cidade: 'PIRAPORA DO BOM JESUS',
    estado: 'SP',
  },
  {
    cidade: 'PIRAPOZINHO',
    estado: 'SP',
  },
  {
    cidade: 'PIRASSUNUNGA',
    estado: 'SP',
  },
  {
    cidade: 'PIRATININGA',
    estado: 'SP',
  },
  {
    cidade: 'PITANGUEIRAS',
    estado: 'SP',
  },
  {
    cidade: 'PLANALTO',
    estado: 'SP',
  },
  {
    cidade: 'PLATINA',
    estado: 'SP',
  },
  {
    cidade: 'POÁ',
    estado: 'SP',
  },
  {
    cidade: 'POLONI',
    estado: 'SP',
  },
  {
    cidade: 'POMPÉIA',
    estado: 'SP',
  },
  {
    cidade: 'PONGAÍ',
    estado: 'SP',
  },
  {
    cidade: 'PONTAL',
    estado: 'SP',
  },
  {
    cidade: 'PONTALINDA',
    estado: 'SP',
  },
  {
    cidade: 'PONTES GESTAL',
    estado: 'SP',
  },
  {
    cidade: 'POPULINA',
    estado: 'SP',
  },
  {
    cidade: 'PORANGABA',
    estado: 'SP',
  },
  {
    cidade: 'PORTO FELIZ',
    estado: 'SP',
  },
  {
    cidade: 'PORTO FERREIRA',
    estado: 'SP',
  },
  {
    cidade: 'POTIM',
    estado: 'SP',
  },
  {
    cidade: 'POTIRENDABA',
    estado: 'SP',
  },
  {
    cidade: 'PRACINHA',
    estado: 'SP',
  },
  {
    cidade: 'PRADÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'PRAIA GRANDE',
    estado: 'SP',
  },
  {
    cidade: 'PRATÂNIA',
    estado: 'SP',
  },
  {
    cidade: 'PRESIDENTE ALVES',
    estado: 'SP',
  },
  {
    cidade: 'PRESIDENTE BERNARDES',
    estado: 'SP',
  },
  {
    cidade: 'PRESIDENTE EPITÁCIO',
    estado: 'SP',
  },
  {
    cidade: 'PRESIDENTE PRUDENTE',
    estado: 'SP',
  },
  {
    cidade: 'PRESIDENTE VENCESLAU',
    estado: 'SP',
  },
  {
    cidade: 'PROMISSÃO',
    estado: 'SP',
  },
  {
    cidade: 'QUADRA',
    estado: 'SP',
  },
  {
    cidade: 'QUATÁ',
    estado: 'SP',
  },
  {
    cidade: 'QUEIROZ',
    estado: 'SP',
  },
  {
    cidade: 'QUELUZ',
    estado: 'SP',
  },
  {
    cidade: 'QUINTANA',
    estado: 'SP',
  },
  {
    cidade: 'RAFARD',
    estado: 'SP',
  },
  {
    cidade: 'RANCHARIA',
    estado: 'SP',
  },
  {
    cidade: 'REDENÇÃO DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'REGENTE FEIJÓ',
    estado: 'SP',
  },
  {
    cidade: 'REGINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'REGISTRO',
    estado: 'SP',
  },
  {
    cidade: 'RESTINGA',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRA',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO BONITO',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO BRANCO',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO CORRENTE',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO DOS ÍNDIOS',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO GRANDE',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO PIRES',
    estado: 'SP',
  },
  {
    cidade: 'RIBEIRÃO PRETO',
    estado: 'SP',
  },
  {
    cidade: 'RIVERSUL',
    estado: 'SP',
  },
  {
    cidade: 'RIFAINA',
    estado: 'SP',
  },
  {
    cidade: 'RINCÃO',
    estado: 'SP',
  },
  {
    cidade: 'RINÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'RIO CLARO',
    estado: 'SP',
  },
  {
    cidade: 'RIO DAS PEDRAS',
    estado: 'SP',
  },
  {
    cidade: 'RIO GRANDE DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'RIOLÂNDIA',
    estado: 'SP',
  },
  {
    cidade: 'ROSANA',
    estado: 'SP',
  },
  {
    cidade: 'ROSEIRA',
    estado: 'SP',
  },
  {
    cidade: 'RUBIÁCEA',
    estado: 'SP',
  },
  {
    cidade: 'RUBINÉIA',
    estado: 'SP',
  },
  {
    cidade: 'SABINO',
    estado: 'SP',
  },
  {
    cidade: 'SAGRES',
    estado: 'SP',
  },
  {
    cidade: 'SALES',
    estado: 'SP',
  },
  {
    cidade: 'SALES OLIVEIRA',
    estado: 'SP',
  },
  {
    cidade: 'SALESÓPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'SALMOURÃO',
    estado: 'SP',
  },
  {
    cidade: 'SALTINHO',
    estado: 'SP',
  },
  {
    cidade: 'SALTO',
    estado: 'SP',
  },
  {
    cidade: 'SALTO DE PIRAPORA',
    estado: 'SP',
  },
  {
    cidade: 'SALTO GRANDE',
    estado: 'SP',
  },
  {
    cidade: 'SANDOVALINA',
    estado: 'SP',
  },
  {
    cidade: 'SANTA ADÉLIA',
    estado: 'SP',
  },
  {
    cidade: 'SANTA ALBERTINA',
    estado: 'SP',
  },
  {
    cidade: "SANTA BÁRBARA D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'SANTA BRANCA',
    estado: 'SP',
  },
  {
    cidade: "SANTA CLARA D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'SANTA CRUZ DA CONCEIÇÃO',
    estado: 'SP',
  },
  {
    cidade: 'SANTA CRUZ DA ESPERANÇA',
    estado: 'SP',
  },
  {
    cidade: 'SANTA CRUZ DAS PALMEIRAS',
    estado: 'SP',
  },
  {
    cidade: 'SANTA CRUZ DO RIO PARDO',
    estado: 'SP',
  },
  {
    cidade: 'SANTA ERNESTINA',
    estado: 'SP',
  },
  {
    cidade: 'SANTA FÉ DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'SANTA GERTRUDES',
    estado: 'SP',
  },
  {
    cidade: 'SANTA ISABEL',
    estado: 'SP',
  },
  {
    cidade: 'SANTA LÚCIA',
    estado: 'SP',
  },
  {
    cidade: 'SANTA MARIA DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'SANTA MERCEDES',
    estado: 'SP',
  },
  {
    cidade: 'SANTANA DA PONTE PENSA',
    estado: 'SP',
  },
  {
    cidade: 'SANTANA DE PARNAÍBA',
    estado: 'SP',
  },
  {
    cidade: "SANTA RITA D'OESTE",
    estado: 'SP',
  },
  {
    cidade: 'SANTA RITA DO PASSA QUATRO',
    estado: 'SP',
  },
  {
    cidade: 'SANTA ROSA DE VITERBO',
    estado: 'SP',
  },
  {
    cidade: 'SANTA SALETE',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANASTÁCIO',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANDRÉ',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANTÔNIO DA ALEGRIA',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANTÔNIO DE POSSE',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANTÔNIO DO ARACANGUÁ',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANTÔNIO DO JARDIM',
    estado: 'SP',
  },
  {
    cidade: 'SANTO ANTÔNIO DO PINHAL',
    estado: 'SP',
  },
  {
    cidade: 'SANTO EXPEDITO',
    estado: 'SP',
  },
  {
    cidade: 'SANTÓPOLIS DO AGUAPEÍ',
    estado: 'SP',
  },
  {
    cidade: 'SANTOS',
    estado: 'SP',
  },
  {
    cidade: 'SÃO BENTO DO SAPUCAÍ',
    estado: 'SP',
  },
  {
    cidade: 'SÃO BERNARDO DO CAMPO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO CAETANO DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'SÃO CARLOS',
    estado: 'SP',
  },
  {
    cidade: 'SÃO FRANCISCO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOÃO DA BOA VISTA',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOÃO DAS DUAS PONTES',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOÃO DE IRACEMA',
    estado: 'SP',
  },
  {
    cidade: "SÃO JOÃO DO PAU D'ALHO",
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOAQUIM DA BARRA',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOSÉ DA BELA VISTA',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOSÉ DO BARREIRO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOSÉ DO RIO PARDO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOSÉ DO RIO PRETO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO JOSÉ DOS CAMPOS',
    estado: 'SP',
  },
  {
    cidade: 'SÃO LOURENÇO DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'SÃO LUIZ DO PARAITINGA',
    estado: 'SP',
  },
  {
    cidade: 'SÃO MANUEL',
    estado: 'SP',
  },
  {
    cidade: 'SÃO MIGUEL ARCANJO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO PAULO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO PEDRO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO PEDRO DO TURVO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO ROQUE',
    estado: 'SP',
  },
  {
    cidade: 'SÃO SEBASTIÃO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO SEBASTIÃO DA GRAMA',
    estado: 'SP',
  },
  {
    cidade: 'SÃO SIMÃO',
    estado: 'SP',
  },
  {
    cidade: 'SÃO VICENTE',
    estado: 'SP',
  },
  {
    cidade: 'SARAPUÍ',
    estado: 'SP',
  },
  {
    cidade: 'SARUTAIÁ',
    estado: 'SP',
  },
  {
    cidade: 'SEBASTIANÓPOLIS DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'SERRA AZUL',
    estado: 'SP',
  },
  {
    cidade: 'SERRANA',
    estado: 'SP',
  },
  {
    cidade: 'SERRA NEGRA',
    estado: 'SP',
  },
  {
    cidade: 'SERTÃOZINHO',
    estado: 'SP',
  },
  {
    cidade: 'SETE BARRAS',
    estado: 'SP',
  },
  {
    cidade: 'SEVERÍNIA',
    estado: 'SP',
  },
  {
    cidade: 'SILVEIRAS',
    estado: 'SP',
  },
  {
    cidade: 'SOCORRO',
    estado: 'SP',
  },
  {
    cidade: 'SOROCABA',
    estado: 'SP',
  },
  {
    cidade: 'SUD MENNUCCI',
    estado: 'SP',
  },
  {
    cidade: 'SUMARÉ',
    estado: 'SP',
  },
  {
    cidade: 'SUZANO',
    estado: 'SP',
  },
  {
    cidade: 'SUZANÁPOLIS',
    estado: 'SP',
  },
  {
    cidade: 'TABAPUÃ',
    estado: 'SP',
  },
  {
    cidade: 'TABATINGA',
    estado: 'SP',
  },
  {
    cidade: 'TABOÃO DA SERRA',
    estado: 'SP',
  },
  {
    cidade: 'TACIBA',
    estado: 'SP',
  },
  {
    cidade: 'TAGUAÍ',
    estado: 'SP',
  },
  {
    cidade: 'TAIAÇU',
    estado: 'SP',
  },
  {
    cidade: 'TAIÚVA',
    estado: 'SP',
  },
  {
    cidade: 'TAMBAÚ',
    estado: 'SP',
  },
  {
    cidade: 'TANABI',
    estado: 'SP',
  },
  {
    cidade: 'TAPIRAÍ',
    estado: 'SP',
  },
  {
    cidade: 'TAPIRATIBA',
    estado: 'SP',
  },
  {
    cidade: 'TAQUARAL',
    estado: 'SP',
  },
  {
    cidade: 'TAQUARITINGA',
    estado: 'SP',
  },
  {
    cidade: 'TAQUARITUBA',
    estado: 'SP',
  },
  {
    cidade: 'TAQUARIVAÍ',
    estado: 'SP',
  },
  {
    cidade: 'TARABAI',
    estado: 'SP',
  },
  {
    cidade: 'TARUMÃ',
    estado: 'SP',
  },
  {
    cidade: 'TATUÍ',
    estado: 'SP',
  },
  {
    cidade: 'TAUBATÉ',
    estado: 'SP',
  },
  {
    cidade: 'TEJUPÁ',
    estado: 'SP',
  },
  {
    cidade: 'TEODORO SAMPAIO',
    estado: 'SP',
  },
  {
    cidade: 'TERRA ROXA',
    estado: 'SP',
  },
  {
    cidade: 'TIETÊ',
    estado: 'SP',
  },
  {
    cidade: 'TIMBURI',
    estado: 'SP',
  },
  {
    cidade: 'TORRE DE PEDRA',
    estado: 'SP',
  },
  {
    cidade: 'TORRINHA',
    estado: 'SP',
  },
  {
    cidade: 'TRABIJU',
    estado: 'SP',
  },
  {
    cidade: 'TREMEMBÉ',
    estado: 'SP',
  },
  {
    cidade: 'TRÊS FRONTEIRAS',
    estado: 'SP',
  },
  {
    cidade: 'TUIUTI',
    estado: 'SP',
  },
  {
    cidade: 'TUPÃ',
    estado: 'SP',
  },
  {
    cidade: 'TUPI PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'TURIÚBA',
    estado: 'SP',
  },
  {
    cidade: 'TURMALINA',
    estado: 'SP',
  },
  {
    cidade: 'UBARANA',
    estado: 'SP',
  },
  {
    cidade: 'UBATUBA',
    estado: 'SP',
  },
  {
    cidade: 'UBIRAJARA',
    estado: 'SP',
  },
  {
    cidade: 'UCHOA',
    estado: 'SP',
  },
  {
    cidade: 'UNIÃO PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'URÂNIA',
    estado: 'SP',
  },
  {
    cidade: 'URU',
    estado: 'SP',
  },
  {
    cidade: 'URUPÊS',
    estado: 'SP',
  },
  {
    cidade: 'VALENTIM GENTIL',
    estado: 'SP',
  },
  {
    cidade: 'VALINHOS',
    estado: 'SP',
  },
  {
    cidade: 'VALPARAÍSO',
    estado: 'SP',
  },
  {
    cidade: 'VARGEM',
    estado: 'SP',
  },
  {
    cidade: 'VARGEM GRANDE DO SUL',
    estado: 'SP',
  },
  {
    cidade: 'VARGEM GRANDE PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'VÁRZEA PAULISTA',
    estado: 'SP',
  },
  {
    cidade: 'VERA CRUZ',
    estado: 'SP',
  },
  {
    cidade: 'VINHEDO',
    estado: 'SP',
  },
  {
    cidade: 'VIRADOURO',
    estado: 'SP',
  },
  {
    cidade: 'VISTA ALEGRE DO ALTO',
    estado: 'SP',
  },
  {
    cidade: 'VITÓRIA BRASIL',
    estado: 'SP',
  },
  {
    cidade: 'VOTORANTIM',
    estado: 'SP',
  },
  {
    cidade: 'VOTUPORANGA',
    estado: 'SP',
  },
  {
    cidade: 'ZACARIAS',
    estado: 'SP',
  },
  {
    cidade: 'CHAVANTES',
    estado: 'SP',
  },
  {
    cidade: 'ESTIVA GERBI',
    estado: 'SP',
  },
  {
    cidade: 'ABATIÁ',
    estado: 'PR',
  },
  {
    cidade: 'ADRIANÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'AGUDOS DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'ALMIRANTE TAMANDARÉ',
    estado: 'PR',
  },
  {
    cidade: 'ALTAMIRA DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'ALTÔNIA',
    estado: 'PR',
  },
  {
    cidade: 'ALTO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'ALTO PIQUIRI',
    estado: 'PR',
  },
  {
    cidade: 'ALVORADA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'AMAPORÃ',
    estado: 'PR',
  },
  {
    cidade: 'AMPÉRE',
    estado: 'PR',
  },
  {
    cidade: 'ANAHY',
    estado: 'PR',
  },
  {
    cidade: 'ANDIRÁ',
    estado: 'PR',
  },
  {
    cidade: 'ÂNGULO',
    estado: 'PR',
  },
  {
    cidade: 'ANTONINA',
    estado: 'PR',
  },
  {
    cidade: 'ANTÔNIO OLINTO',
    estado: 'PR',
  },
  {
    cidade: 'APUCARANA',
    estado: 'PR',
  },
  {
    cidade: 'ARAPONGAS',
    estado: 'PR',
  },
  {
    cidade: 'ARAPOTI',
    estado: 'PR',
  },
  {
    cidade: 'ARAPUÃ',
    estado: 'PR',
  },
  {
    cidade: 'ARARUNA',
    estado: 'PR',
  },
  {
    cidade: 'ARAUCÁRIA',
    estado: 'PR',
  },
  {
    cidade: 'ARIRANHA DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'ASSAÍ',
    estado: 'PR',
  },
  {
    cidade: 'ASSIS CHATEAUBRIAND',
    estado: 'PR',
  },
  {
    cidade: 'ASTORGA',
    estado: 'PR',
  },
  {
    cidade: 'ATALAIA',
    estado: 'PR',
  },
  {
    cidade: 'BALSA NOVA',
    estado: 'PR',
  },
  {
    cidade: 'BANDEIRANTES',
    estado: 'PR',
  },
  {
    cidade: 'BARBOSA FERRAZ',
    estado: 'PR',
  },
  {
    cidade: 'BARRACÃO',
    estado: 'PR',
  },
  {
    cidade: 'BARRA DO JACARÉ',
    estado: 'PR',
  },
  {
    cidade: 'BELA VISTA DA CAROBA',
    estado: 'PR',
  },
  {
    cidade: 'BELA VISTA DO PARAÍSO',
    estado: 'PR',
  },
  {
    cidade: 'BITURUNA',
    estado: 'PR',
  },
  {
    cidade: 'BOA ESPERANÇA',
    estado: 'PR',
  },
  {
    cidade: 'BOA ESPERANÇA DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'BOA VENTURA DE SÃO ROQUE',
    estado: 'PR',
  },
  {
    cidade: 'BOA VISTA DA APARECIDA',
    estado: 'PR',
  },
  {
    cidade: 'BOCAIÚVA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'BOM JESUS DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'BOM SUCESSO',
    estado: 'PR',
  },
  {
    cidade: 'BOM SUCESSO DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'BORRAZÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'BRAGANEY',
    estado: 'PR',
  },
  {
    cidade: 'BRASILÂNDIA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'CAFEARA',
    estado: 'PR',
  },
  {
    cidade: 'CAFELÂNDIA',
    estado: 'PR',
  },
  {
    cidade: 'CAFEZAL DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'CALIFÓRNIA',
    estado: 'PR',
  },
  {
    cidade: 'CAMBARÁ',
    estado: 'PR',
  },
  {
    cidade: 'CAMBÉ',
    estado: 'PR',
  },
  {
    cidade: 'CAMBIRA',
    estado: 'PR',
  },
  {
    cidade: 'CAMPINA DA LAGOA',
    estado: 'PR',
  },
  {
    cidade: 'CAMPINA DO SIMÃO',
    estado: 'PR',
  },
  {
    cidade: 'CAMPINA GRANDE DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'CAMPO BONITO',
    estado: 'PR',
  },
  {
    cidade: 'CAMPO DO TENENTE',
    estado: 'PR',
  },
  {
    cidade: 'CAMPO LARGO',
    estado: 'PR',
  },
  {
    cidade: 'CAMPO MAGRO',
    estado: 'PR',
  },
  {
    cidade: 'CAMPO MOURÃO',
    estado: 'PR',
  },
  {
    cidade: 'CÂNDIDO DE ABREU',
    estado: 'PR',
  },
  {
    cidade: 'CANDÓI',
    estado: 'PR',
  },
  {
    cidade: 'CANTAGALO',
    estado: 'PR',
  },
  {
    cidade: 'CAPANEMA',
    estado: 'PR',
  },
  {
    cidade: 'CAPITÃO LEÔNIDAS MARQUES',
    estado: 'PR',
  },
  {
    cidade: 'CARAMBEÍ',
    estado: 'PR',
  },
  {
    cidade: 'CARLÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'CASCAVEL',
    estado: 'PR',
  },
  {
    cidade: 'CASTRO',
    estado: 'PR',
  },
  {
    cidade: 'CATANDUVAS',
    estado: 'PR',
  },
  {
    cidade: 'CENTENÁRIO DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'CERRO AZUL',
    estado: 'PR',
  },
  {
    cidade: 'CÉU AZUL',
    estado: 'PR',
  },
  {
    cidade: 'CHOPINZINHO',
    estado: 'PR',
  },
  {
    cidade: 'CIANORTE',
    estado: 'PR',
  },
  {
    cidade: 'CIDADE GAÚCHA',
    estado: 'PR',
  },
  {
    cidade: 'CLEVELÂNDIA',
    estado: 'PR',
  },
  {
    cidade: 'COLOMBO',
    estado: 'PR',
  },
  {
    cidade: 'COLORADO',
    estado: 'PR',
  },
  {
    cidade: 'CONGONHINHAS',
    estado: 'PR',
  },
  {
    cidade: 'CONSELHEIRO MAIRINCK',
    estado: 'PR',
  },
  {
    cidade: 'CONTENDA',
    estado: 'PR',
  },
  {
    cidade: 'CORBÉLIA',
    estado: 'PR',
  },
  {
    cidade: 'CORNÉLIO PROCÓPIO',
    estado: 'PR',
  },
  {
    cidade: 'CORONEL DOMINGOS SOARES',
    estado: 'PR',
  },
  {
    cidade: 'CORONEL VIVIDA',
    estado: 'PR',
  },
  {
    cidade: 'CORUMBATAÍ DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'CRUZEIRO DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'CRUZEIRO DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'CRUZEIRO DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'CRUZ MACHADO',
    estado: 'PR',
  },
  {
    cidade: 'CRUZMALTINA',
    estado: 'PR',
  },
  {
    cidade: 'CURITIBA',
    estado: 'PR',
  },
  {
    cidade: 'CURIÚVA',
    estado: 'PR',
  },
  {
    cidade: 'DIAMANTE DO NORTE',
    estado: 'PR',
  },
  {
    cidade: 'DIAMANTE DO SUL',
    estado: 'PR',
  },
  {
    cidade: "DIAMANTE D'OESTE",
    estado: 'PR',
  },
  {
    cidade: 'DOIS VIZINHOS',
    estado: 'PR',
  },
  {
    cidade: 'DOURADINA',
    estado: 'PR',
  },
  {
    cidade: 'DOUTOR CAMARGO',
    estado: 'PR',
  },
  {
    cidade: 'ENÉAS MARQUES',
    estado: 'PR',
  },
  {
    cidade: 'ENGENHEIRO BELTRÃO',
    estado: 'PR',
  },
  {
    cidade: 'ESPERANÇA NOVA',
    estado: 'PR',
  },
  {
    cidade: 'ENTRE RIOS DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'ESPIGÃO ALTO DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'FAROL',
    estado: 'PR',
  },
  {
    cidade: 'FAXINAL',
    estado: 'PR',
  },
  {
    cidade: 'FAZENDA RIO GRANDE',
    estado: 'PR',
  },
  {
    cidade: 'FÊNIX',
    estado: 'PR',
  },
  {
    cidade: 'FERNANDES PINHEIRO',
    estado: 'PR',
  },
  {
    cidade: 'FIGUEIRA',
    estado: 'PR',
  },
  {
    cidade: 'FLORAÍ',
    estado: 'PR',
  },
  {
    cidade: 'FLOR DA SERRA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'FLORESTA',
    estado: 'PR',
  },
  {
    cidade: 'FLORESTÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'FLÓRIDA',
    estado: 'PR',
  },
  {
    cidade: 'FORMOSA DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'FOZ DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'FRANCISCO ALVES',
    estado: 'PR',
  },
  {
    cidade: 'FRANCISCO BELTRÃO',
    estado: 'PR',
  },
  {
    cidade: 'FOZ DO JORDÃO',
    estado: 'PR',
  },
  {
    cidade: 'GENERAL CARNEIRO',
    estado: 'PR',
  },
  {
    cidade: 'GODOY MOREIRA',
    estado: 'PR',
  },
  {
    cidade: 'GOIOERÊ',
    estado: 'PR',
  },
  {
    cidade: 'GOIOXIM',
    estado: 'PR',
  },
  {
    cidade: 'GRANDES RIOS',
    estado: 'PR',
  },
  {
    cidade: 'GUAÍRA',
    estado: 'PR',
  },
  {
    cidade: 'GUAIRAÇÁ',
    estado: 'PR',
  },
  {
    cidade: 'GUAMIRANGA',
    estado: 'PR',
  },
  {
    cidade: 'GUAPIRAMA',
    estado: 'PR',
  },
  {
    cidade: 'GUAPOREMA',
    estado: 'PR',
  },
  {
    cidade: 'GUARACI',
    estado: 'PR',
  },
  {
    cidade: 'GUARANIAÇU',
    estado: 'PR',
  },
  {
    cidade: 'GUARAPUAVA',
    estado: 'PR',
  },
  {
    cidade: 'GUARAQUEÇABA',
    estado: 'PR',
  },
  {
    cidade: 'GUARATUBA',
    estado: 'PR',
  },
  {
    cidade: 'HONÓRIO SERPA',
    estado: 'PR',
  },
  {
    cidade: 'IBAITI',
    estado: 'PR',
  },
  {
    cidade: 'IBEMA',
    estado: 'PR',
  },
  {
    cidade: 'IBIPORÃ',
    estado: 'PR',
  },
  {
    cidade: 'ICARAÍMA',
    estado: 'PR',
  },
  {
    cidade: 'IGUARAÇU',
    estado: 'PR',
  },
  {
    cidade: 'IGUATU',
    estado: 'PR',
  },
  {
    cidade: 'IMBAÚ',
    estado: 'PR',
  },
  {
    cidade: 'IMBITUVA',
    estado: 'PR',
  },
  {
    cidade: 'INÁCIO MARTINS',
    estado: 'PR',
  },
  {
    cidade: 'INAJÁ',
    estado: 'PR',
  },
  {
    cidade: 'INDIANÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'IPIRANGA',
    estado: 'PR',
  },
  {
    cidade: 'IPORÃ',
    estado: 'PR',
  },
  {
    cidade: 'IRACEMA DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'IRATI',
    estado: 'PR',
  },
  {
    cidade: 'IRETAMA',
    estado: 'PR',
  },
  {
    cidade: 'ITAGUAJÉ',
    estado: 'PR',
  },
  {
    cidade: 'ITAIPULÂNDIA',
    estado: 'PR',
  },
  {
    cidade: 'ITAMBARACÁ',
    estado: 'PR',
  },
  {
    cidade: 'ITAMBÉ',
    estado: 'PR',
  },
  {
    cidade: "ITAPEJARA D'OESTE",
    estado: 'PR',
  },
  {
    cidade: 'ITAPERUÇU',
    estado: 'PR',
  },
  {
    cidade: 'ITAÚNA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'IVAIPORÃ',
    estado: 'PR',
  },
  {
    cidade: 'IVATÉ',
    estado: 'PR',
  },
  {
    cidade: 'IVATUBA',
    estado: 'PR',
  },
  {
    cidade: 'JABOTI',
    estado: 'PR',
  },
  {
    cidade: 'JACAREZINHO',
    estado: 'PR',
  },
  {
    cidade: 'JAGUAPITÃ',
    estado: 'PR',
  },
  {
    cidade: 'JAGUARIAÍVA',
    estado: 'PR',
  },
  {
    cidade: 'JANDAIA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'JANIÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'JAPIRA',
    estado: 'PR',
  },
  {
    cidade: 'JAPURÁ',
    estado: 'PR',
  },
  {
    cidade: 'JARDIM ALEGRE',
    estado: 'PR',
  },
  {
    cidade: 'JARDIM OLINDA',
    estado: 'PR',
  },
  {
    cidade: 'JATAIZINHO',
    estado: 'PR',
  },
  {
    cidade: 'JESUÍTAS',
    estado: 'PR',
  },
  {
    cidade: 'JOAQUIM TÁVORA',
    estado: 'PR',
  },
  {
    cidade: 'JUNDIAÍ DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'JURANDA',
    estado: 'PR',
  },
  {
    cidade: 'JUSSARA',
    estado: 'PR',
  },
  {
    cidade: 'KALORÉ',
    estado: 'PR',
  },
  {
    cidade: 'LAPA',
    estado: 'PR',
  },
  {
    cidade: 'LARANJAL',
    estado: 'PR',
  },
  {
    cidade: 'LARANJEIRAS DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'LEÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'LIDIANÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'LINDOESTE',
    estado: 'PR',
  },
  {
    cidade: 'LOANDA',
    estado: 'PR',
  },
  {
    cidade: 'LOBATO',
    estado: 'PR',
  },
  {
    cidade: 'LONDRINA',
    estado: 'PR',
  },
  {
    cidade: 'LUIZIANA',
    estado: 'PR',
  },
  {
    cidade: 'LUNARDELLI',
    estado: 'PR',
  },
  {
    cidade: 'LUPIONÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'MALLET',
    estado: 'PR',
  },
  {
    cidade: 'MAMBORÊ',
    estado: 'PR',
  },
  {
    cidade: 'MANDAGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'MANDAGUARI',
    estado: 'PR',
  },
  {
    cidade: 'MANDIRITUBA',
    estado: 'PR',
  },
  {
    cidade: 'MANFRINÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'MANGUEIRINHA',
    estado: 'PR',
  },
  {
    cidade: 'MANOEL RIBAS',
    estado: 'PR',
  },
  {
    cidade: 'MARECHAL CÂNDIDO RONDON',
    estado: 'PR',
  },
  {
    cidade: 'MARIA HELENA',
    estado: 'PR',
  },
  {
    cidade: 'MARIALVA',
    estado: 'PR',
  },
  {
    cidade: 'MARILÂNDIA DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'MARILENA',
    estado: 'PR',
  },
  {
    cidade: 'MARILUZ',
    estado: 'PR',
  },
  {
    cidade: 'MARINGÁ',
    estado: 'PR',
  },
  {
    cidade: 'MARIÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'MARIPÁ',
    estado: 'PR',
  },
  {
    cidade: 'MARMELEIRO',
    estado: 'PR',
  },
  {
    cidade: 'MARQUINHO',
    estado: 'PR',
  },
  {
    cidade: 'MARUMBI',
    estado: 'PR',
  },
  {
    cidade: 'MATELÂNDIA',
    estado: 'PR',
  },
  {
    cidade: 'MATINHOS',
    estado: 'PR',
  },
  {
    cidade: 'MATO RICO',
    estado: 'PR',
  },
  {
    cidade: 'MAUÁ DA SERRA',
    estado: 'PR',
  },
  {
    cidade: 'MEDIANEIRA',
    estado: 'PR',
  },
  {
    cidade: 'MERCEDES',
    estado: 'PR',
  },
  {
    cidade: 'MIRADOR',
    estado: 'PR',
  },
  {
    cidade: 'MIRASELVA',
    estado: 'PR',
  },
  {
    cidade: 'MISSAL',
    estado: 'PR',
  },
  {
    cidade: 'MOREIRA SALES',
    estado: 'PR',
  },
  {
    cidade: 'MORRETES',
    estado: 'PR',
  },
  {
    cidade: 'MUNHOZ DE MELO',
    estado: 'PR',
  },
  {
    cidade: 'NOSSA SENHORA DAS GRAÇAS',
    estado: 'PR',
  },
  {
    cidade: 'NOVA ALIANÇA DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'NOVA AMÉRICA DA COLINA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA AURORA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA CANTU',
    estado: 'PR',
  },
  {
    cidade: 'NOVA ESPERANÇA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA ESPERANÇA DO SUDOESTE',
    estado: 'PR',
  },
  {
    cidade: 'NOVA FÁTIMA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA LARANJEIRAS',
    estado: 'PR',
  },
  {
    cidade: 'NOVA LONDRINA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA OLÍMPIA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA SANTA BÁRBARA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA SANTA ROSA',
    estado: 'PR',
  },
  {
    cidade: 'NOVA PRATA DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'NOVA TEBAS',
    estado: 'PR',
  },
  {
    cidade: 'NOVO ITACOLOMI',
    estado: 'PR',
  },
  {
    cidade: 'ORTIGUEIRA',
    estado: 'PR',
  },
  {
    cidade: 'OURIZONA',
    estado: 'PR',
  },
  {
    cidade: 'OURO VERDE DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'PAIÇANDU',
    estado: 'PR',
  },
  {
    cidade: 'PALMAS',
    estado: 'PR',
  },
  {
    cidade: 'PALMEIRA',
    estado: 'PR',
  },
  {
    cidade: 'PALMITAL',
    estado: 'PR',
  },
  {
    cidade: 'PALOTINA',
    estado: 'PR',
  },
  {
    cidade: 'PARAÍSO DO NORTE',
    estado: 'PR',
  },
  {
    cidade: 'PARANACITY',
    estado: 'PR',
  },
  {
    cidade: 'PARANAGUÁ',
    estado: 'PR',
  },
  {
    cidade: 'PARANAPOEMA',
    estado: 'PR',
  },
  {
    cidade: 'PARANAVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'PATO BRAGADO',
    estado: 'PR',
  },
  {
    cidade: 'PATO BRANCO',
    estado: 'PR',
  },
  {
    cidade: 'PAULA FREITAS',
    estado: 'PR',
  },
  {
    cidade: 'PAULO FRONTIN',
    estado: 'PR',
  },
  {
    cidade: 'PEABIRU',
    estado: 'PR',
  },
  {
    cidade: 'PEROBAL',
    estado: 'PR',
  },
  {
    cidade: 'PÉROLA',
    estado: 'PR',
  },
  {
    cidade: "PÉROLA D'OESTE",
    estado: 'PR',
  },
  {
    cidade: 'PIÊN',
    estado: 'PR',
  },
  {
    cidade: 'PINHAIS',
    estado: 'PR',
  },
  {
    cidade: 'PINHALÃO',
    estado: 'PR',
  },
  {
    cidade: 'PINHAL DE SÃO BENTO',
    estado: 'PR',
  },
  {
    cidade: 'PINHÃO',
    estado: 'PR',
  },
  {
    cidade: 'PIRAÍ DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'PIRAQUARA',
    estado: 'PR',
  },
  {
    cidade: 'PITANGA',
    estado: 'PR',
  },
  {
    cidade: 'PITANGUEIRAS',
    estado: 'PR',
  },
  {
    cidade: 'PLANALTINA DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'PLANALTO',
    estado: 'PR',
  },
  {
    cidade: 'PONTA GROSSA',
    estado: 'PR',
  },
  {
    cidade: 'PONTAL DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'PORECATU',
    estado: 'PR',
  },
  {
    cidade: 'PORTO AMAZONAS',
    estado: 'PR',
  },
  {
    cidade: 'PORTO BARREIRO',
    estado: 'PR',
  },
  {
    cidade: 'PORTO RICO',
    estado: 'PR',
  },
  {
    cidade: 'PORTO VITÓRIA',
    estado: 'PR',
  },
  {
    cidade: 'PRADO FERREIRA',
    estado: 'PR',
  },
  {
    cidade: 'PRANCHITA',
    estado: 'PR',
  },
  {
    cidade: 'PRESIDENTE CASTELO BRANCO',
    estado: 'PR',
  },
  {
    cidade: 'PRIMEIRO DE MAIO',
    estado: 'PR',
  },
  {
    cidade: 'PRUDENTÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'QUARTO CENTENÁRIO',
    estado: 'PR',
  },
  {
    cidade: 'QUATIGUÁ',
    estado: 'PR',
  },
  {
    cidade: 'QUATRO BARRAS',
    estado: 'PR',
  },
  {
    cidade: 'QUATRO PONTES',
    estado: 'PR',
  },
  {
    cidade: 'QUEDAS DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'QUERÊNCIA DO NORTE',
    estado: 'PR',
  },
  {
    cidade: 'QUINTA DO SOL',
    estado: 'PR',
  },
  {
    cidade: 'QUITANDINHA',
    estado: 'PR',
  },
  {
    cidade: 'RAMILÂNDIA',
    estado: 'PR',
  },
  {
    cidade: 'RANCHO ALEGRE',
    estado: 'PR',
  },
  {
    cidade: "RANCHO ALEGRE D'OESTE",
    estado: 'PR',
  },
  {
    cidade: 'REALEZA',
    estado: 'PR',
  },
  {
    cidade: 'REBOUÇAS',
    estado: 'PR',
  },
  {
    cidade: 'RENASCENÇA',
    estado: 'PR',
  },
  {
    cidade: 'RESERVA',
    estado: 'PR',
  },
  {
    cidade: 'RESERVA DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'RIBEIRÃO CLARO',
    estado: 'PR',
  },
  {
    cidade: 'RIBEIRÃO DO PINHAL',
    estado: 'PR',
  },
  {
    cidade: 'RIO AZUL',
    estado: 'PR',
  },
  {
    cidade: 'RIO BOM',
    estado: 'PR',
  },
  {
    cidade: 'RIO BONITO DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'RIO BRANCO DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'RIO BRANCO DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'RIO NEGRO',
    estado: 'PR',
  },
  {
    cidade: 'ROLÂNDIA',
    estado: 'PR',
  },
  {
    cidade: 'RONCADOR',
    estado: 'PR',
  },
  {
    cidade: 'RONDON',
    estado: 'PR',
  },
  {
    cidade: 'ROSÁRIO DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'SABÁUDIA',
    estado: 'PR',
  },
  {
    cidade: 'SALGADO FILHO',
    estado: 'PR',
  },
  {
    cidade: 'SALTO DO ITARARÉ',
    estado: 'PR',
  },
  {
    cidade: 'SALTO DO LONTRA',
    estado: 'PR',
  },
  {
    cidade: 'SANTA AMÉLIA',
    estado: 'PR',
  },
  {
    cidade: 'SANTA CECÍLIA DO PAVÃO',
    estado: 'PR',
  },
  {
    cidade: 'SANTA CRUZ DE MONTE CASTELO',
    estado: 'PR',
  },
  {
    cidade: 'SANTA FÉ',
    estado: 'PR',
  },
  {
    cidade: 'SANTA HELENA',
    estado: 'PR',
  },
  {
    cidade: 'SANTA INÊS',
    estado: 'PR',
  },
  {
    cidade: 'SANTA ISABEL DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'SANTA IZABEL DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'SANTA LÚCIA',
    estado: 'PR',
  },
  {
    cidade: 'SANTA MARIA DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'SANTA MARIANA',
    estado: 'PR',
  },
  {
    cidade: 'SANTA MÔNICA',
    estado: 'PR',
  },
  {
    cidade: 'SANTANA DO ITARARÉ',
    estado: 'PR',
  },
  {
    cidade: 'SANTA TEREZA DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'SANTA TEREZINHA DE ITAIPU',
    estado: 'PR',
  },
  {
    cidade: 'SANTO ANTÔNIO DA PLATINA',
    estado: 'PR',
  },
  {
    cidade: 'SANTO ANTÔNIO DO CAIUÁ',
    estado: 'PR',
  },
  {
    cidade: 'SANTO ANTÔNIO DO PARAÍSO',
    estado: 'PR',
  },
  {
    cidade: 'SANTO ANTÔNIO DO SUDOESTE',
    estado: 'PR',
  },
  {
    cidade: 'SANTO INÁCIO',
    estado: 'PR',
  },
  {
    cidade: 'SÃO CARLOS DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JERÔNIMO DA SERRA',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOÃO',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOÃO DO CAIUÁ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOÃO DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOÃO DO TRIUNFO',
    estado: 'PR',
  },
  {
    cidade: "SÃO JORGE D'OESTE",
    estado: 'PR',
  },
  {
    cidade: 'SÃO JORGE DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JORGE DO PATROCÍNIO',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOSÉ DA BOA VISTA',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOSÉ DAS PALMEIRAS',
    estado: 'PR',
  },
  {
    cidade: 'SÃO JOSÉ DOS PINHAIS',
    estado: 'PR',
  },
  {
    cidade: 'SÃO MANOEL DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO MATEUS DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'SÃO MIGUEL DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'SÃO PEDRO DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'SÃO PEDRO DO IVAÍ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO PEDRO DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'SÃO SEBASTIÃO DA AMOREIRA',
    estado: 'PR',
  },
  {
    cidade: 'SÃO TOMÉ',
    estado: 'PR',
  },
  {
    cidade: 'SAPOPEMA',
    estado: 'PR',
  },
  {
    cidade: 'SARANDI',
    estado: 'PR',
  },
  {
    cidade: 'SAUDADE DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'SENGÉS',
    estado: 'PR',
  },
  {
    cidade: 'SERRANÓPOLIS DO IGUAÇU',
    estado: 'PR',
  },
  {
    cidade: 'SERTANEJA',
    estado: 'PR',
  },
  {
    cidade: 'SERTANÓPOLIS',
    estado: 'PR',
  },
  {
    cidade: 'SIQUEIRA CAMPOS',
    estado: 'PR',
  },
  {
    cidade: 'SULINA',
    estado: 'PR',
  },
  {
    cidade: 'TAMARANA',
    estado: 'PR',
  },
  {
    cidade: 'TAMBOARA',
    estado: 'PR',
  },
  {
    cidade: 'TAPEJARA',
    estado: 'PR',
  },
  {
    cidade: 'TAPIRA',
    estado: 'PR',
  },
  {
    cidade: 'TEIXEIRA SOARES',
    estado: 'PR',
  },
  {
    cidade: 'TELÊMACO BORBA',
    estado: 'PR',
  },
  {
    cidade: 'TERRA BOA',
    estado: 'PR',
  },
  {
    cidade: 'TERRA RICA',
    estado: 'PR',
  },
  {
    cidade: 'TERRA ROXA',
    estado: 'PR',
  },
  {
    cidade: 'TIBAGI',
    estado: 'PR',
  },
  {
    cidade: 'TIJUCAS DO SUL',
    estado: 'PR',
  },
  {
    cidade: 'TOLEDO',
    estado: 'PR',
  },
  {
    cidade: 'TOMAZINA',
    estado: 'PR',
  },
  {
    cidade: 'TRÊS BARRAS DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'TUNAS DO PARANÁ',
    estado: 'PR',
  },
  {
    cidade: 'TUNEIRAS DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'TUPÃSSI',
    estado: 'PR',
  },
  {
    cidade: 'TURVO',
    estado: 'PR',
  },
  {
    cidade: 'UBIRATÃ',
    estado: 'PR',
  },
  {
    cidade: 'UMUARAMA',
    estado: 'PR',
  },
  {
    cidade: 'UNIÃO DA VITÓRIA',
    estado: 'PR',
  },
  {
    cidade: 'UNIFLOR',
    estado: 'PR',
  },
  {
    cidade: 'URAÍ',
    estado: 'PR',
  },
  {
    cidade: 'WENCESLAU BRAZ',
    estado: 'PR',
  },
  {
    cidade: 'VENTANIA',
    estado: 'PR',
  },
  {
    cidade: 'VERA CRUZ DO OESTE',
    estado: 'PR',
  },
  {
    cidade: 'VERÊ',
    estado: 'PR',
  },
  {
    cidade: 'ALTO PARAÍSO',
    estado: 'PR',
  },
  {
    cidade: 'DOUTOR ULYSSES',
    estado: 'PR',
  },
  {
    cidade: 'VIRMOND',
    estado: 'PR',
  },
  {
    cidade: 'VITORINO',
    estado: 'PR',
  },
  {
    cidade: 'XAMBRÊ',
    estado: 'PR',
  },
  {
    cidade: 'ABDON BATISTA',
    estado: 'SC',
  },
  {
    cidade: 'ABELARDO LUZ',
    estado: 'SC',
  },
  {
    cidade: 'AGROLÂNDIA',
    estado: 'SC',
  },
  {
    cidade: 'AGRONÔMICA',
    estado: 'SC',
  },
  {
    cidade: 'ÁGUA DOCE',
    estado: 'SC',
  },
  {
    cidade: 'ÁGUAS DE CHAPECÓ',
    estado: 'SC',
  },
  {
    cidade: 'ÁGUAS FRIAS',
    estado: 'SC',
  },
  {
    cidade: 'ÁGUAS MORNAS',
    estado: 'SC',
  },
  {
    cidade: 'ALFREDO WAGNER',
    estado: 'SC',
  },
  {
    cidade: 'ALTO BELA VISTA',
    estado: 'SC',
  },
  {
    cidade: 'ANCHIETA',
    estado: 'SC',
  },
  {
    cidade: 'ANGELINA',
    estado: 'SC',
  },
  {
    cidade: 'ANITA GARIBALDI',
    estado: 'SC',
  },
  {
    cidade: 'ANITÁPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'ANTÔNIO CARLOS',
    estado: 'SC',
  },
  {
    cidade: 'APIÚNA',
    estado: 'SC',
  },
  {
    cidade: 'ARABUTÃ',
    estado: 'SC',
  },
  {
    cidade: 'ARAQUARI',
    estado: 'SC',
  },
  {
    cidade: 'ARARANGUÁ',
    estado: 'SC',
  },
  {
    cidade: 'ARMAZÉM',
    estado: 'SC',
  },
  {
    cidade: 'ARROIO TRINTA',
    estado: 'SC',
  },
  {
    cidade: 'ARVOREDO',
    estado: 'SC',
  },
  {
    cidade: 'ASCURRA',
    estado: 'SC',
  },
  {
    cidade: 'ATALANTA',
    estado: 'SC',
  },
  {
    cidade: 'AURORA',
    estado: 'SC',
  },
  {
    cidade: 'BALNEÁRIO ARROIO DO SILVA',
    estado: 'SC',
  },
  {
    cidade: 'BALNEÁRIO CAMBORIÚ',
    estado: 'SC',
  },
  {
    cidade: 'BALNEÁRIO BARRA DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'BALNEÁRIO GAIVOTA',
    estado: 'SC',
  },
  {
    cidade: 'BANDEIRANTE',
    estado: 'SC',
  },
  {
    cidade: 'BARRA BONITA',
    estado: 'SC',
  },
  {
    cidade: 'BARRA VELHA',
    estado: 'SC',
  },
  {
    cidade: 'BELA VISTA DO TOLDO',
    estado: 'SC',
  },
  {
    cidade: 'BELMONTE',
    estado: 'SC',
  },
  {
    cidade: 'BENEDITO NOVO',
    estado: 'SC',
  },
  {
    cidade: 'BIGUAÇU',
    estado: 'SC',
  },
  {
    cidade: 'BLUMENAU',
    estado: 'SC',
  },
  {
    cidade: 'BOCAINA DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'BOMBINHAS',
    estado: 'SC',
  },
  {
    cidade: 'BOM JARDIM DA SERRA',
    estado: 'SC',
  },
  {
    cidade: 'BOM JESUS',
    estado: 'SC',
  },
  {
    cidade: 'BOM JESUS DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'BOM RETIRO',
    estado: 'SC',
  },
  {
    cidade: 'BOTUVERÁ',
    estado: 'SC',
  },
  {
    cidade: 'BRAÇO DO NORTE',
    estado: 'SC',
  },
  {
    cidade: 'BRAÇO DO TROMBUDO',
    estado: 'SC',
  },
  {
    cidade: 'BRUNÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'BRUSQUE',
    estado: 'SC',
  },
  {
    cidade: 'CAÇADOR',
    estado: 'SC',
  },
  {
    cidade: 'CAIBI',
    estado: 'SC',
  },
  {
    cidade: 'CALMON',
    estado: 'SC',
  },
  {
    cidade: 'CAMBORIÚ',
    estado: 'SC',
  },
  {
    cidade: 'CAPÃO ALTO',
    estado: 'SC',
  },
  {
    cidade: 'CAMPO ALEGRE',
    estado: 'SC',
  },
  {
    cidade: 'CAMPO BELO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'CAMPO ERÊ',
    estado: 'SC',
  },
  {
    cidade: 'CAMPOS NOVOS',
    estado: 'SC',
  },
  {
    cidade: 'CANELINHA',
    estado: 'SC',
  },
  {
    cidade: 'CANOINHAS',
    estado: 'SC',
  },
  {
    cidade: 'CAPINZAL',
    estado: 'SC',
  },
  {
    cidade: 'CAPIVARI DE BAIXO',
    estado: 'SC',
  },
  {
    cidade: 'CATANDUVAS',
    estado: 'SC',
  },
  {
    cidade: 'CAXAMBU DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'CELSO RAMOS',
    estado: 'SC',
  },
  {
    cidade: 'CERRO NEGRO',
    estado: 'SC',
  },
  {
    cidade: 'CHAPADÃO DO LAGEADO',
    estado: 'SC',
  },
  {
    cidade: 'CHAPECÓ',
    estado: 'SC',
  },
  {
    cidade: 'COCAL DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'CONCÓRDIA',
    estado: 'SC',
  },
  {
    cidade: 'CORDILHEIRA ALTA',
    estado: 'SC',
  },
  {
    cidade: 'CORONEL FREITAS',
    estado: 'SC',
  },
  {
    cidade: 'CORONEL MARTINS',
    estado: 'SC',
  },
  {
    cidade: 'CORUPÁ',
    estado: 'SC',
  },
  {
    cidade: 'CORREIA PINTO',
    estado: 'SC',
  },
  {
    cidade: 'CRICIÚMA',
    estado: 'SC',
  },
  {
    cidade: 'CUNHA PORÃ',
    estado: 'SC',
  },
  {
    cidade: 'CUNHATAÍ',
    estado: 'SC',
  },
  {
    cidade: 'CURITIBANOS',
    estado: 'SC',
  },
  {
    cidade: 'DESCANSO',
    estado: 'SC',
  },
  {
    cidade: 'DIONÍSIO CERQUEIRA',
    estado: 'SC',
  },
  {
    cidade: 'DONA EMMA',
    estado: 'SC',
  },
  {
    cidade: 'DOUTOR PEDRINHO',
    estado: 'SC',
  },
  {
    cidade: 'ENTRE RIOS',
    estado: 'SC',
  },
  {
    cidade: 'ERMO',
    estado: 'SC',
  },
  {
    cidade: 'ERVAL VELHO',
    estado: 'SC',
  },
  {
    cidade: 'FAXINAL DOS GUEDES',
    estado: 'SC',
  },
  {
    cidade: 'FLOR DO SERTÃO',
    estado: 'SC',
  },
  {
    cidade: 'FLORIANÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'FORMOSA DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'FORQUILHINHA',
    estado: 'SC',
  },
  {
    cidade: 'FRAIBURGO',
    estado: 'SC',
  },
  {
    cidade: 'FREI ROGÉRIO',
    estado: 'SC',
  },
  {
    cidade: 'GALVÃO',
    estado: 'SC',
  },
  {
    cidade: 'GAROPABA',
    estado: 'SC',
  },
  {
    cidade: 'GARUVA',
    estado: 'SC',
  },
  {
    cidade: 'GASPAR',
    estado: 'SC',
  },
  {
    cidade: 'GOVERNADOR CELSO RAMOS',
    estado: 'SC',
  },
  {
    cidade: 'GRÃO-PARÁ',
    estado: 'SC',
  },
  {
    cidade: 'GRAVATAL',
    estado: 'SC',
  },
  {
    cidade: 'GUABIRUBA',
    estado: 'SC',
  },
  {
    cidade: 'GUARACIABA',
    estado: 'SC',
  },
  {
    cidade: 'GUARAMIRIM',
    estado: 'SC',
  },
  {
    cidade: 'GUARUJÁ DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'GUATAMBÚ',
    estado: 'SC',
  },
  {
    cidade: "HERVAL D'OESTE",
    estado: 'SC',
  },
  {
    cidade: 'IBIAM',
    estado: 'SC',
  },
  {
    cidade: 'IBICARÉ',
    estado: 'SC',
  },
  {
    cidade: 'IBIRAMA',
    estado: 'SC',
  },
  {
    cidade: 'IÇARA',
    estado: 'SC',
  },
  {
    cidade: 'ILHOTA',
    estado: 'SC',
  },
  {
    cidade: 'IMARUÍ',
    estado: 'SC',
  },
  {
    cidade: 'IMBITUBA',
    estado: 'SC',
  },
  {
    cidade: 'IMBUIA',
    estado: 'SC',
  },
  {
    cidade: 'INDAIAL',
    estado: 'SC',
  },
  {
    cidade: 'IOMERÊ',
    estado: 'SC',
  },
  {
    cidade: 'IPIRA',
    estado: 'SC',
  },
  {
    cidade: 'IPORÃ DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'IPUAÇU',
    estado: 'SC',
  },
  {
    cidade: 'IPUMIRIM',
    estado: 'SC',
  },
  {
    cidade: 'IRACEMINHA',
    estado: 'SC',
  },
  {
    cidade: 'IRANI',
    estado: 'SC',
  },
  {
    cidade: 'IRATI',
    estado: 'SC',
  },
  {
    cidade: 'IRINEÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'ITÁ',
    estado: 'SC',
  },
  {
    cidade: 'ITAIÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'ITAJAÍ',
    estado: 'SC',
  },
  {
    cidade: 'ITAPEMA',
    estado: 'SC',
  },
  {
    cidade: 'ITAPIRANGA',
    estado: 'SC',
  },
  {
    cidade: 'ITAPOÁ',
    estado: 'SC',
  },
  {
    cidade: 'ITUPORANGA',
    estado: 'SC',
  },
  {
    cidade: 'JABORÁ',
    estado: 'SC',
  },
  {
    cidade: 'JACINTO MACHADO',
    estado: 'SC',
  },
  {
    cidade: 'JAGUARUNA',
    estado: 'SC',
  },
  {
    cidade: 'JARAGUÁ DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'JARDINÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'JOAÇABA',
    estado: 'SC',
  },
  {
    cidade: 'JOINVILLE',
    estado: 'SC',
  },
  {
    cidade: 'JOSÉ BOITEUX',
    estado: 'SC',
  },
  {
    cidade: 'JUPIÁ',
    estado: 'SC',
  },
  {
    cidade: 'LACERDÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'LAGES',
    estado: 'SC',
  },
  {
    cidade: 'LAGUNA',
    estado: 'SC',
  },
  {
    cidade: 'LAJEADO GRANDE',
    estado: 'SC',
  },
  {
    cidade: 'LAURENTINO',
    estado: 'SC',
  },
  {
    cidade: 'LAURO MÜLLER',
    estado: 'SC',
  },
  {
    cidade: 'LEBON RÉGIS',
    estado: 'SC',
  },
  {
    cidade: 'LEOBERTO LEAL',
    estado: 'SC',
  },
  {
    cidade: 'LINDÓIA DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'LONTRAS',
    estado: 'SC',
  },
  {
    cidade: 'LUIZ ALVES',
    estado: 'SC',
  },
  {
    cidade: 'LUZERNA',
    estado: 'SC',
  },
  {
    cidade: 'MACIEIRA',
    estado: 'SC',
  },
  {
    cidade: 'MAFRA',
    estado: 'SC',
  },
  {
    cidade: 'MAJOR GERCINO',
    estado: 'SC',
  },
  {
    cidade: 'MAJOR VIEIRA',
    estado: 'SC',
  },
  {
    cidade: 'MARACAJÁ',
    estado: 'SC',
  },
  {
    cidade: 'MARAVILHA',
    estado: 'SC',
  },
  {
    cidade: 'MAREMA',
    estado: 'SC',
  },
  {
    cidade: 'MASSARANDUBA',
    estado: 'SC',
  },
  {
    cidade: 'MATOS COSTA',
    estado: 'SC',
  },
  {
    cidade: 'MELEIRO',
    estado: 'SC',
  },
  {
    cidade: 'MIRIM DOCE',
    estado: 'SC',
  },
  {
    cidade: 'MODELO',
    estado: 'SC',
  },
  {
    cidade: 'MONDAÍ',
    estado: 'SC',
  },
  {
    cidade: 'MONTE CARLO',
    estado: 'SC',
  },
  {
    cidade: 'MONTE CASTELO',
    estado: 'SC',
  },
  {
    cidade: 'MORRO DA FUMAÇA',
    estado: 'SC',
  },
  {
    cidade: 'MORRO GRANDE',
    estado: 'SC',
  },
  {
    cidade: 'NAVEGANTES',
    estado: 'SC',
  },
  {
    cidade: 'NOVA ERECHIM',
    estado: 'SC',
  },
  {
    cidade: 'NOVA ITABERABA',
    estado: 'SC',
  },
  {
    cidade: 'NOVA TRENTO',
    estado: 'SC',
  },
  {
    cidade: 'NOVA VENEZA',
    estado: 'SC',
  },
  {
    cidade: 'NOVO HORIZONTE',
    estado: 'SC',
  },
  {
    cidade: 'ORLEANS',
    estado: 'SC',
  },
  {
    cidade: 'OTACÍLIO COSTA',
    estado: 'SC',
  },
  {
    cidade: 'OURO',
    estado: 'SC',
  },
  {
    cidade: 'OURO VERDE',
    estado: 'SC',
  },
  {
    cidade: 'PAIAL',
    estado: 'SC',
  },
  {
    cidade: 'PAINEL',
    estado: 'SC',
  },
  {
    cidade: 'PALHOÇA',
    estado: 'SC',
  },
  {
    cidade: 'PALMA SOLA',
    estado: 'SC',
  },
  {
    cidade: 'PALMEIRA',
    estado: 'SC',
  },
  {
    cidade: 'PALMITOS',
    estado: 'SC',
  },
  {
    cidade: 'PAPANDUVA',
    estado: 'SC',
  },
  {
    cidade: 'PARAÍSO',
    estado: 'SC',
  },
  {
    cidade: 'PASSO DE TORRES',
    estado: 'SC',
  },
  {
    cidade: 'PASSOS MAIA',
    estado: 'SC',
  },
  {
    cidade: 'PAULO LOPES',
    estado: 'SC',
  },
  {
    cidade: 'PEDRAS GRANDES',
    estado: 'SC',
  },
  {
    cidade: 'PENHA',
    estado: 'SC',
  },
  {
    cidade: 'PERITIBA',
    estado: 'SC',
  },
  {
    cidade: 'PESCARIA BRAVA',
    estado: 'SC',
  },
  {
    cidade: 'PETROLÂNDIA',
    estado: 'SC',
  },
  {
    cidade: 'BALNEÁRIO PIÇARRAS',
    estado: 'SC',
  },
  {
    cidade: 'PINHALZINHO',
    estado: 'SC',
  },
  {
    cidade: 'PINHEIRO PRETO',
    estado: 'SC',
  },
  {
    cidade: 'PIRATUBA',
    estado: 'SC',
  },
  {
    cidade: 'PLANALTO ALEGRE',
    estado: 'SC',
  },
  {
    cidade: 'POMERODE',
    estado: 'SC',
  },
  {
    cidade: 'PONTE ALTA',
    estado: 'SC',
  },
  {
    cidade: 'PONTE ALTA DO NORTE',
    estado: 'SC',
  },
  {
    cidade: 'PONTE SERRADA',
    estado: 'SC',
  },
  {
    cidade: 'PORTO BELO',
    estado: 'SC',
  },
  {
    cidade: 'PORTO UNIÃO',
    estado: 'SC',
  },
  {
    cidade: 'POUSO REDONDO',
    estado: 'SC',
  },
  {
    cidade: 'PRAIA GRANDE',
    estado: 'SC',
  },
  {
    cidade: 'PRESIDENTE CASTELLO BRANCO',
    estado: 'SC',
  },
  {
    cidade: 'PRESIDENTE GETÚLIO',
    estado: 'SC',
  },
  {
    cidade: 'PRESIDENTE NEREU',
    estado: 'SC',
  },
  {
    cidade: 'PRINCESA',
    estado: 'SC',
  },
  {
    cidade: 'QUILOMBO',
    estado: 'SC',
  },
  {
    cidade: 'RANCHO QUEIMADO',
    estado: 'SC',
  },
  {
    cidade: 'RIO DAS ANTAS',
    estado: 'SC',
  },
  {
    cidade: 'RIO DO CAMPO',
    estado: 'SC',
  },
  {
    cidade: 'RIO DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'RIO DOS CEDROS',
    estado: 'SC',
  },
  {
    cidade: 'RIO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'RIO FORTUNA',
    estado: 'SC',
  },
  {
    cidade: 'RIO NEGRINHO',
    estado: 'SC',
  },
  {
    cidade: 'RIO RUFINO',
    estado: 'SC',
  },
  {
    cidade: 'RIQUEZA',
    estado: 'SC',
  },
  {
    cidade: 'RODEIO',
    estado: 'SC',
  },
  {
    cidade: 'ROMELÂNDIA',
    estado: 'SC',
  },
  {
    cidade: 'SALETE',
    estado: 'SC',
  },
  {
    cidade: 'SALTINHO',
    estado: 'SC',
  },
  {
    cidade: 'SALTO VELOSO',
    estado: 'SC',
  },
  {
    cidade: 'SANGÃO',
    estado: 'SC',
  },
  {
    cidade: 'SANTA CECÍLIA',
    estado: 'SC',
  },
  {
    cidade: 'SANTA HELENA',
    estado: 'SC',
  },
  {
    cidade: 'SANTA ROSA DE LIMA',
    estado: 'SC',
  },
  {
    cidade: 'SANTA ROSA DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'SANTA TEREZINHA',
    estado: 'SC',
  },
  {
    cidade: 'SANTA TEREZINHA DO PROGRESSO',
    estado: 'SC',
  },
  {
    cidade: 'SANTIAGO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'SANTO AMARO DA IMPERATRIZ',
    estado: 'SC',
  },
  {
    cidade: 'SÃO BERNARDINO',
    estado: 'SC',
  },
  {
    cidade: 'SÃO BENTO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'SÃO BONIFÁCIO',
    estado: 'SC',
  },
  {
    cidade: 'SÃO CARLOS',
    estado: 'SC',
  },
  {
    cidade: 'SÃO CRISTÓVÃO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'SÃO DOMINGOS',
    estado: 'SC',
  },
  {
    cidade: 'SÃO FRANCISCO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOÃO DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOÃO BATISTA',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOÃO DO ITAPERIÚ',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOÃO DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOAQUIM',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOSÉ',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOSÉ DO CEDRO',
    estado: 'SC',
  },
  {
    cidade: 'SÃO JOSÉ DO CERRITO',
    estado: 'SC',
  },
  {
    cidade: 'SÃO LOURENÇO DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'SÃO LUDGERO',
    estado: 'SC',
  },
  {
    cidade: 'SÃO MARTINHO',
    estado: 'SC',
  },
  {
    cidade: 'SÃO MIGUEL DA BOA VISTA',
    estado: 'SC',
  },
  {
    cidade: 'SÃO MIGUEL DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'SÃO PEDRO DE ALCÂNTARA',
    estado: 'SC',
  },
  {
    cidade: 'SAUDADES',
    estado: 'SC',
  },
  {
    cidade: 'SCHROEDER',
    estado: 'SC',
  },
  {
    cidade: 'SEARA',
    estado: 'SC',
  },
  {
    cidade: 'SERRA ALTA',
    estado: 'SC',
  },
  {
    cidade: 'SIDERÓPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'SOMBRIO',
    estado: 'SC',
  },
  {
    cidade: 'SUL BRASIL',
    estado: 'SC',
  },
  {
    cidade: 'TAIÓ',
    estado: 'SC',
  },
  {
    cidade: 'TANGARÁ',
    estado: 'SC',
  },
  {
    cidade: 'TIGRINHOS',
    estado: 'SC',
  },
  {
    cidade: 'TIJUCAS',
    estado: 'SC',
  },
  {
    cidade: 'TIMBÉ DO SUL',
    estado: 'SC',
  },
  {
    cidade: 'TIMBÓ',
    estado: 'SC',
  },
  {
    cidade: 'TIMBÓ GRANDE',
    estado: 'SC',
  },
  {
    cidade: 'TRÊS BARRAS',
    estado: 'SC',
  },
  {
    cidade: 'TREVISO',
    estado: 'SC',
  },
  {
    cidade: 'TREZE DE MAIO',
    estado: 'SC',
  },
  {
    cidade: 'TREZE TÍLIAS',
    estado: 'SC',
  },
  {
    cidade: 'TROMBUDO CENTRAL',
    estado: 'SC',
  },
  {
    cidade: 'TUBARÃO',
    estado: 'SC',
  },
  {
    cidade: 'TUNÁPOLIS',
    estado: 'SC',
  },
  {
    cidade: 'TURVO',
    estado: 'SC',
  },
  {
    cidade: 'UNIÃO DO OESTE',
    estado: 'SC',
  },
  {
    cidade: 'URUBICI',
    estado: 'SC',
  },
  {
    cidade: 'URUPEMA',
    estado: 'SC',
  },
  {
    cidade: 'URUSSANGA',
    estado: 'SC',
  },
  {
    cidade: 'VARGEÃO',
    estado: 'SC',
  },
  {
    cidade: 'VARGEM',
    estado: 'SC',
  },
  {
    cidade: 'VARGEM BONITA',
    estado: 'SC',
  },
  {
    cidade: 'VIDAL RAMOS',
    estado: 'SC',
  },
  {
    cidade: 'VIDEIRA',
    estado: 'SC',
  },
  {
    cidade: 'VITOR MEIRELES',
    estado: 'SC',
  },
  {
    cidade: 'WITMARSUM',
    estado: 'SC',
  },
  {
    cidade: 'XANXERÊ',
    estado: 'SC',
  },
  {
    cidade: 'XAVANTINA',
    estado: 'SC',
  },
  {
    cidade: 'XAXIM',
    estado: 'SC',
  },
  {
    cidade: 'ZORTÉA',
    estado: 'SC',
  },
  {
    cidade: 'BALNEÁRIO RINCÃO',
    estado: 'SC',
  },
  {
    cidade: 'ACEGUÁ',
    estado: 'RS',
  },
  {
    cidade: 'ÁGUA SANTA',
    estado: 'RS',
  },
  {
    cidade: 'AGUDO',
    estado: 'RS',
  },
  {
    cidade: 'AJURICABA',
    estado: 'RS',
  },
  {
    cidade: 'ALECRIM',
    estado: 'RS',
  },
  {
    cidade: 'ALEGRETE',
    estado: 'RS',
  },
  {
    cidade: 'ALEGRIA',
    estado: 'RS',
  },
  {
    cidade: 'ALMIRANTE TAMANDARÉ DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'ALPESTRE',
    estado: 'RS',
  },
  {
    cidade: 'ALTO ALEGRE',
    estado: 'RS',
  },
  {
    cidade: 'ALTO FELIZ',
    estado: 'RS',
  },
  {
    cidade: 'ALVORADA',
    estado: 'RS',
  },
  {
    cidade: 'AMARAL FERRADOR',
    estado: 'RS',
  },
  {
    cidade: 'AMETISTA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'ANDRÉ DA ROCHA',
    estado: 'RS',
  },
  {
    cidade: 'ANTA GORDA',
    estado: 'RS',
  },
  {
    cidade: 'ANTÔNIO PRADO',
    estado: 'RS',
  },
  {
    cidade: 'ARAMBARÉ',
    estado: 'RS',
  },
  {
    cidade: 'ARARICÁ',
    estado: 'RS',
  },
  {
    cidade: 'ARATIBA',
    estado: 'RS',
  },
  {
    cidade: 'ARROIO DO MEIO',
    estado: 'RS',
  },
  {
    cidade: 'ARROIO DO SAL',
    estado: 'RS',
  },
  {
    cidade: 'ARROIO DO PADRE',
    estado: 'RS',
  },
  {
    cidade: 'ARROIO DOS RATOS',
    estado: 'RS',
  },
  {
    cidade: 'ARROIO DO TIGRE',
    estado: 'RS',
  },
  {
    cidade: 'ARROIO GRANDE',
    estado: 'RS',
  },
  {
    cidade: 'ARVOREZINHA',
    estado: 'RS',
  },
  {
    cidade: 'AUGUSTO PESTANA',
    estado: 'RS',
  },
  {
    cidade: 'ÁUREA',
    estado: 'RS',
  },
  {
    cidade: 'BAGÉ',
    estado: 'RS',
  },
  {
    cidade: 'BALNEÁRIO PINHAL',
    estado: 'RS',
  },
  {
    cidade: 'BARÃO',
    estado: 'RS',
  },
  {
    cidade: 'BARÃO DE COTEGIPE',
    estado: 'RS',
  },
  {
    cidade: 'BARÃO DO TRIUNFO',
    estado: 'RS',
  },
  {
    cidade: 'BARRACÃO',
    estado: 'RS',
  },
  {
    cidade: 'BARRA DO GUARITA',
    estado: 'RS',
  },
  {
    cidade: 'BARRA DO QUARAÍ',
    estado: 'RS',
  },
  {
    cidade: 'BARRA DO RIBEIRO',
    estado: 'RS',
  },
  {
    cidade: 'BARRA DO RIO AZUL',
    estado: 'RS',
  },
  {
    cidade: 'BARRA FUNDA',
    estado: 'RS',
  },
  {
    cidade: 'BARROS CASSAL',
    estado: 'RS',
  },
  {
    cidade: 'BENJAMIN CONSTANT DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'BENTO GONÇALVES',
    estado: 'RS',
  },
  {
    cidade: 'BOA VISTA DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'BOA VISTA DO BURICÁ',
    estado: 'RS',
  },
  {
    cidade: 'BOA VISTA DO CADEADO',
    estado: 'RS',
  },
  {
    cidade: 'BOA VISTA DO INCRA',
    estado: 'RS',
  },
  {
    cidade: 'BOA VISTA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'BOM JESUS',
    estado: 'RS',
  },
  {
    cidade: 'BOM PRINCÍPIO',
    estado: 'RS',
  },
  {
    cidade: 'BOM PROGRESSO',
    estado: 'RS',
  },
  {
    cidade: 'BOM RETIRO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'BOQUEIRÃO DO LEÃO',
    estado: 'RS',
  },
  {
    cidade: 'BOSSOROCA',
    estado: 'RS',
  },
  {
    cidade: 'BOZANO',
    estado: 'RS',
  },
  {
    cidade: 'BRAGA',
    estado: 'RS',
  },
  {
    cidade: 'BROCHIER',
    estado: 'RS',
  },
  {
    cidade: 'BUTIÁ',
    estado: 'RS',
  },
  {
    cidade: 'CAÇAPAVA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CACEQUI',
    estado: 'RS',
  },
  {
    cidade: 'CACHOEIRA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CACHOEIRINHA',
    estado: 'RS',
  },
  {
    cidade: 'CACIQUE DOBLE',
    estado: 'RS',
  },
  {
    cidade: 'CAIBATÉ',
    estado: 'RS',
  },
  {
    cidade: 'CAIÇARA',
    estado: 'RS',
  },
  {
    cidade: 'CAMAQUÃ',
    estado: 'RS',
  },
  {
    cidade: 'CAMARGO',
    estado: 'RS',
  },
  {
    cidade: 'CAMBARÁ DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CAMPESTRE DA SERRA',
    estado: 'RS',
  },
  {
    cidade: 'CAMPINA DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'CAMPINAS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CAMPO BOM',
    estado: 'RS',
  },
  {
    cidade: 'CAMPO NOVO',
    estado: 'RS',
  },
  {
    cidade: 'CAMPOS BORGES',
    estado: 'RS',
  },
  {
    cidade: 'CANDELÁRIA',
    estado: 'RS',
  },
  {
    cidade: 'CÂNDIDO GODÓI',
    estado: 'RS',
  },
  {
    cidade: 'CANDIOTA',
    estado: 'RS',
  },
  {
    cidade: 'CANELA',
    estado: 'RS',
  },
  {
    cidade: 'CANGUÇU',
    estado: 'RS',
  },
  {
    cidade: 'CANOAS',
    estado: 'RS',
  },
  {
    cidade: 'CANUDOS DO VALE',
    estado: 'RS',
  },
  {
    cidade: 'CAPÃO BONITO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CAPÃO DA CANOA',
    estado: 'RS',
  },
  {
    cidade: 'CAPÃO DO CIPÓ',
    estado: 'RS',
  },
  {
    cidade: 'CAPÃO DO LEÃO',
    estado: 'RS',
  },
  {
    cidade: 'CAPIVARI DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CAPELA DE SANTANA',
    estado: 'RS',
  },
  {
    cidade: 'CAPITÃO',
    estado: 'RS',
  },
  {
    cidade: 'CARAZINHO',
    estado: 'RS',
  },
  {
    cidade: 'CARAÁ',
    estado: 'RS',
  },
  {
    cidade: 'CARLOS BARBOSA',
    estado: 'RS',
  },
  {
    cidade: 'CARLOS GOMES',
    estado: 'RS',
  },
  {
    cidade: 'CASCA',
    estado: 'RS',
  },
  {
    cidade: 'CASEIROS',
    estado: 'RS',
  },
  {
    cidade: 'CATUÍPE',
    estado: 'RS',
  },
  {
    cidade: 'CAXIAS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CENTENÁRIO',
    estado: 'RS',
  },
  {
    cidade: 'CERRITO',
    estado: 'RS',
  },
  {
    cidade: 'CERRO BRANCO',
    estado: 'RS',
  },
  {
    cidade: 'CERRO GRANDE',
    estado: 'RS',
  },
  {
    cidade: 'CERRO GRANDE DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CERRO LARGO',
    estado: 'RS',
  },
  {
    cidade: 'CHAPADA',
    estado: 'RS',
  },
  {
    cidade: 'CHARQUEADAS',
    estado: 'RS',
  },
  {
    cidade: 'CHARRUA',
    estado: 'RS',
  },
  {
    cidade: 'CHIAPETTA',
    estado: 'RS',
  },
  {
    cidade: 'CHUÍ',
    estado: 'RS',
  },
  {
    cidade: 'CHUVISCA',
    estado: 'RS',
  },
  {
    cidade: 'CIDREIRA',
    estado: 'RS',
  },
  {
    cidade: 'CIRÍACO',
    estado: 'RS',
  },
  {
    cidade: 'COLINAS',
    estado: 'RS',
  },
  {
    cidade: 'COLORADO',
    estado: 'RS',
  },
  {
    cidade: 'CONDOR',
    estado: 'RS',
  },
  {
    cidade: 'CONSTANTINA',
    estado: 'RS',
  },
  {
    cidade: 'COQUEIRO BAIXO',
    estado: 'RS',
  },
  {
    cidade: 'COQUEIROS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CORONEL BARROS',
    estado: 'RS',
  },
  {
    cidade: 'CORONEL BICACO',
    estado: 'RS',
  },
  {
    cidade: 'CORONEL PILAR',
    estado: 'RS',
  },
  {
    cidade: 'COTIPORÃ',
    estado: 'RS',
  },
  {
    cidade: 'COXILHA',
    estado: 'RS',
  },
  {
    cidade: 'CRISSIUMAL',
    estado: 'RS',
  },
  {
    cidade: 'CRISTAL',
    estado: 'RS',
  },
  {
    cidade: 'CRISTAL DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'CRUZ ALTA',
    estado: 'RS',
  },
  {
    cidade: 'CRUZALTENSE',
    estado: 'RS',
  },
  {
    cidade: 'CRUZEIRO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'DAVID CANABARRO',
    estado: 'RS',
  },
  {
    cidade: 'DERRUBADAS',
    estado: 'RS',
  },
  {
    cidade: 'DEZESSEIS DE NOVEMBRO',
    estado: 'RS',
  },
  {
    cidade: 'DILERMANDO DE AGUIAR',
    estado: 'RS',
  },
  {
    cidade: 'DOIS IRMÃOS',
    estado: 'RS',
  },
  {
    cidade: 'DOIS IRMÃOS DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'DOIS LAJEADOS',
    estado: 'RS',
  },
  {
    cidade: 'DOM FELICIANO',
    estado: 'RS',
  },
  {
    cidade: 'DOM PEDRO DE ALCÂNTARA',
    estado: 'RS',
  },
  {
    cidade: 'DOM PEDRITO',
    estado: 'RS',
  },
  {
    cidade: 'DONA FRANCISCA',
    estado: 'RS',
  },
  {
    cidade: 'DOUTOR MAURÍCIO CARDOSO',
    estado: 'RS',
  },
  {
    cidade: 'DOUTOR RICARDO',
    estado: 'RS',
  },
  {
    cidade: 'ELDORADO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'ENCANTADO',
    estado: 'RS',
  },
  {
    cidade: 'ENCRUZILHADA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'ENGENHO VELHO',
    estado: 'RS',
  },
  {
    cidade: 'ENTRE-IJUÍS',
    estado: 'RS',
  },
  {
    cidade: 'ENTRE RIOS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'EREBANGO',
    estado: 'RS',
  },
  {
    cidade: 'ERECHIM',
    estado: 'RS',
  },
  {
    cidade: 'ERNESTINA',
    estado: 'RS',
  },
  {
    cidade: 'HERVAL',
    estado: 'RS',
  },
  {
    cidade: 'ERVAL GRANDE',
    estado: 'RS',
  },
  {
    cidade: 'ERVAL SECO',
    estado: 'RS',
  },
  {
    cidade: 'ESMERALDA',
    estado: 'RS',
  },
  {
    cidade: 'ESPERANÇA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'ESPUMOSO',
    estado: 'RS',
  },
  {
    cidade: 'ESTAÇÃO',
    estado: 'RS',
  },
  {
    cidade: 'ESTÂNCIA VELHA',
    estado: 'RS',
  },
  {
    cidade: 'ESTEIO',
    estado: 'RS',
  },
  {
    cidade: 'ESTRELA',
    estado: 'RS',
  },
  {
    cidade: 'ESTRELA VELHA',
    estado: 'RS',
  },
  {
    cidade: 'EUGÊNIO DE CASTRO',
    estado: 'RS',
  },
  {
    cidade: 'FAGUNDES VARELA',
    estado: 'RS',
  },
  {
    cidade: 'FARROUPILHA',
    estado: 'RS',
  },
  {
    cidade: 'FAXINAL DO SOTURNO',
    estado: 'RS',
  },
  {
    cidade: 'FAXINALZINHO',
    estado: 'RS',
  },
  {
    cidade: 'FAZENDA VILANOVA',
    estado: 'RS',
  },
  {
    cidade: 'FELIZ',
    estado: 'RS',
  },
  {
    cidade: 'FLORES DA CUNHA',
    estado: 'RS',
  },
  {
    cidade: 'FLORIANO PEIXOTO',
    estado: 'RS',
  },
  {
    cidade: 'FONTOURA XAVIER',
    estado: 'RS',
  },
  {
    cidade: 'FORMIGUEIRO',
    estado: 'RS',
  },
  {
    cidade: 'FORQUETINHA',
    estado: 'RS',
  },
  {
    cidade: 'FORTALEZA DOS VALOS',
    estado: 'RS',
  },
  {
    cidade: 'FREDERICO WESTPHALEN',
    estado: 'RS',
  },
  {
    cidade: 'GARIBALDI',
    estado: 'RS',
  },
  {
    cidade: 'GARRUCHOS',
    estado: 'RS',
  },
  {
    cidade: 'GAURAMA',
    estado: 'RS',
  },
  {
    cidade: 'GENERAL CÂMARA',
    estado: 'RS',
  },
  {
    cidade: 'GENTIL',
    estado: 'RS',
  },
  {
    cidade: 'GETÚLIO VARGAS',
    estado: 'RS',
  },
  {
    cidade: 'GIRUÁ',
    estado: 'RS',
  },
  {
    cidade: 'GLORINHA',
    estado: 'RS',
  },
  {
    cidade: 'GRAMADO',
    estado: 'RS',
  },
  {
    cidade: 'GRAMADO DOS LOUREIROS',
    estado: 'RS',
  },
  {
    cidade: 'GRAMADO XAVIER',
    estado: 'RS',
  },
  {
    cidade: 'GRAVATAÍ',
    estado: 'RS',
  },
  {
    cidade: 'GUABIJU',
    estado: 'RS',
  },
  {
    cidade: 'GUAÍBA',
    estado: 'RS',
  },
  {
    cidade: 'GUAPORÉ',
    estado: 'RS',
  },
  {
    cidade: 'GUARANI DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'HARMONIA',
    estado: 'RS',
  },
  {
    cidade: 'HERVEIRAS',
    estado: 'RS',
  },
  {
    cidade: 'HORIZONTINA',
    estado: 'RS',
  },
  {
    cidade: 'HULHA NEGRA',
    estado: 'RS',
  },
  {
    cidade: 'HUMAITÁ',
    estado: 'RS',
  },
  {
    cidade: 'IBARAMA',
    estado: 'RS',
  },
  {
    cidade: 'IBIAÇÁ',
    estado: 'RS',
  },
  {
    cidade: 'IBIRAIARAS',
    estado: 'RS',
  },
  {
    cidade: 'IBIRAPUITÃ',
    estado: 'RS',
  },
  {
    cidade: 'IBIRUBÁ',
    estado: 'RS',
  },
  {
    cidade: 'IGREJINHA',
    estado: 'RS',
  },
  {
    cidade: 'IJUÍ',
    estado: 'RS',
  },
  {
    cidade: 'ILÓPOLIS',
    estado: 'RS',
  },
  {
    cidade: 'IMBÉ',
    estado: 'RS',
  },
  {
    cidade: 'IMIGRANTE',
    estado: 'RS',
  },
  {
    cidade: 'INDEPENDÊNCIA',
    estado: 'RS',
  },
  {
    cidade: 'INHACORÁ',
    estado: 'RS',
  },
  {
    cidade: 'IPÊ',
    estado: 'RS',
  },
  {
    cidade: 'IPIRANGA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'IRAÍ',
    estado: 'RS',
  },
  {
    cidade: 'ITAARA',
    estado: 'RS',
  },
  {
    cidade: 'ITACURUBI',
    estado: 'RS',
  },
  {
    cidade: 'ITAPUCA',
    estado: 'RS',
  },
  {
    cidade: 'ITAQUI',
    estado: 'RS',
  },
  {
    cidade: 'ITATI',
    estado: 'RS',
  },
  {
    cidade: 'ITATIBA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'IVORÁ',
    estado: 'RS',
  },
  {
    cidade: 'IVOTI',
    estado: 'RS',
  },
  {
    cidade: 'JABOTICABA',
    estado: 'RS',
  },
  {
    cidade: 'JACUIZINHO',
    estado: 'RS',
  },
  {
    cidade: 'JACUTINGA',
    estado: 'RS',
  },
  {
    cidade: 'JAGUARÃO',
    estado: 'RS',
  },
  {
    cidade: 'JAGUARI',
    estado: 'RS',
  },
  {
    cidade: 'JAQUIRANA',
    estado: 'RS',
  },
  {
    cidade: 'JARI',
    estado: 'RS',
  },
  {
    cidade: 'JÓIA',
    estado: 'RS',
  },
  {
    cidade: 'JÚLIO DE CASTILHOS',
    estado: 'RS',
  },
  {
    cidade: 'LAGOA BONITA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'LAGOÃO',
    estado: 'RS',
  },
  {
    cidade: 'LAGOA DOS TRÊS CANTOS',
    estado: 'RS',
  },
  {
    cidade: 'LAGOA VERMELHA',
    estado: 'RS',
  },
  {
    cidade: 'LAJEADO',
    estado: 'RS',
  },
  {
    cidade: 'LAJEADO DO BUGRE',
    estado: 'RS',
  },
  {
    cidade: 'LAVRAS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'LIBERATO SALZANO',
    estado: 'RS',
  },
  {
    cidade: 'LINDOLFO COLLOR',
    estado: 'RS',
  },
  {
    cidade: 'LINHA NOVA',
    estado: 'RS',
  },
  {
    cidade: 'MACHADINHO',
    estado: 'RS',
  },
  {
    cidade: 'MAÇAMBARÁ',
    estado: 'RS',
  },
  {
    cidade: 'MAMPITUBA',
    estado: 'RS',
  },
  {
    cidade: 'MANOEL VIANA',
    estado: 'RS',
  },
  {
    cidade: 'MAQUINÉ',
    estado: 'RS',
  },
  {
    cidade: 'MARATÁ',
    estado: 'RS',
  },
  {
    cidade: 'MARAU',
    estado: 'RS',
  },
  {
    cidade: 'MARCELINO RAMOS',
    estado: 'RS',
  },
  {
    cidade: 'MARIANA PIMENTEL',
    estado: 'RS',
  },
  {
    cidade: 'MARIANO MORO',
    estado: 'RS',
  },
  {
    cidade: 'MARQUES DE SOUZA',
    estado: 'RS',
  },
  {
    cidade: 'MATA',
    estado: 'RS',
  },
  {
    cidade: 'MATO CASTELHANO',
    estado: 'RS',
  },
  {
    cidade: 'MATO LEITÃO',
    estado: 'RS',
  },
  {
    cidade: 'MATO QUEIMADO',
    estado: 'RS',
  },
  {
    cidade: 'MAXIMILIANO DE ALMEIDA',
    estado: 'RS',
  },
  {
    cidade: 'MINAS DO LEÃO',
    estado: 'RS',
  },
  {
    cidade: 'MIRAGUAÍ',
    estado: 'RS',
  },
  {
    cidade: 'MONTAURI',
    estado: 'RS',
  },
  {
    cidade: 'MONTE ALEGRE DOS CAMPOS',
    estado: 'RS',
  },
  {
    cidade: 'MONTE BELO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'MONTENEGRO',
    estado: 'RS',
  },
  {
    cidade: 'MORMAÇO',
    estado: 'RS',
  },
  {
    cidade: 'MORRINHOS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'MORRO REDONDO',
    estado: 'RS',
  },
  {
    cidade: 'MORRO REUTER',
    estado: 'RS',
  },
  {
    cidade: 'MOSTARDAS',
    estado: 'RS',
  },
  {
    cidade: 'MUÇUM',
    estado: 'RS',
  },
  {
    cidade: 'MUITOS CAPÕES',
    estado: 'RS',
  },
  {
    cidade: 'MULITERNO',
    estado: 'RS',
  },
  {
    cidade: 'NÃO-ME-TOQUE',
    estado: 'RS',
  },
  {
    cidade: 'NICOLAU VERGUEIRO',
    estado: 'RS',
  },
  {
    cidade: 'NONOAI',
    estado: 'RS',
  },
  {
    cidade: 'NOVA ALVORADA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA ARAÇÁ',
    estado: 'RS',
  },
  {
    cidade: 'NOVA BASSANO',
    estado: 'RS',
  },
  {
    cidade: 'NOVA BOA VISTA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA BRÉSCIA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA CANDELÁRIA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA ESPERANÇA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'NOVA HARTZ',
    estado: 'RS',
  },
  {
    cidade: 'NOVA PÁDUA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA PALMA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA PETRÓPOLIS',
    estado: 'RS',
  },
  {
    cidade: 'NOVA PRATA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA RAMADA',
    estado: 'RS',
  },
  {
    cidade: 'NOVA ROMA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'NOVA SANTA RITA',
    estado: 'RS',
  },
  {
    cidade: 'NOVO CABRAIS',
    estado: 'RS',
  },
  {
    cidade: 'NOVO HAMBURGO',
    estado: 'RS',
  },
  {
    cidade: 'NOVO MACHADO',
    estado: 'RS',
  },
  {
    cidade: 'NOVO TIRADENTES',
    estado: 'RS',
  },
  {
    cidade: 'NOVO XINGU',
    estado: 'RS',
  },
  {
    cidade: 'NOVO BARREIRO',
    estado: 'RS',
  },
  {
    cidade: 'OSÓRIO',
    estado: 'RS',
  },
  {
    cidade: 'PAIM FILHO',
    estado: 'RS',
  },
  {
    cidade: 'PALMARES DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'PALMEIRA DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'PALMITINHO',
    estado: 'RS',
  },
  {
    cidade: 'PANAMBI',
    estado: 'RS',
  },
  {
    cidade: 'PANTANO GRANDE',
    estado: 'RS',
  },
  {
    cidade: 'PARAÍ',
    estado: 'RS',
  },
  {
    cidade: 'PARAÍSO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'PARECI NOVO',
    estado: 'RS',
  },
  {
    cidade: 'PAROBÉ',
    estado: 'RS',
  },
  {
    cidade: 'PASSA SETE',
    estado: 'RS',
  },
  {
    cidade: 'PASSO DO SOBRADO',
    estado: 'RS',
  },
  {
    cidade: 'PASSO FUNDO',
    estado: 'RS',
  },
  {
    cidade: 'PAULO BENTO',
    estado: 'RS',
  },
  {
    cidade: 'PAVERAMA',
    estado: 'RS',
  },
  {
    cidade: 'PEDRAS ALTAS',
    estado: 'RS',
  },
  {
    cidade: 'PEDRO OSÓRIO',
    estado: 'RS',
  },
  {
    cidade: 'PEJUÇARA',
    estado: 'RS',
  },
  {
    cidade: 'PELOTAS',
    estado: 'RS',
  },
  {
    cidade: 'PICADA CAFÉ',
    estado: 'RS',
  },
  {
    cidade: 'PINHAL',
    estado: 'RS',
  },
  {
    cidade: 'PINHAL DA SERRA',
    estado: 'RS',
  },
  {
    cidade: 'PINHAL GRANDE',
    estado: 'RS',
  },
  {
    cidade: 'PINHEIRINHO DO VALE',
    estado: 'RS',
  },
  {
    cidade: 'PINHEIRO MACHADO',
    estado: 'RS',
  },
  {
    cidade: 'PINTO BANDEIRA',
    estado: 'RS',
  },
  {
    cidade: 'PIRAPÓ',
    estado: 'RS',
  },
  {
    cidade: 'PIRATINI',
    estado: 'RS',
  },
  {
    cidade: 'PLANALTO',
    estado: 'RS',
  },
  {
    cidade: 'POÇO DAS ANTAS',
    estado: 'RS',
  },
  {
    cidade: 'PONTÃO',
    estado: 'RS',
  },
  {
    cidade: 'PONTE PRETA',
    estado: 'RS',
  },
  {
    cidade: 'PORTÃO',
    estado: 'RS',
  },
  {
    cidade: 'PORTO ALEGRE',
    estado: 'RS',
  },
  {
    cidade: 'PORTO LUCENA',
    estado: 'RS',
  },
  {
    cidade: 'PORTO MAUÁ',
    estado: 'RS',
  },
  {
    cidade: 'PORTO VERA CRUZ',
    estado: 'RS',
  },
  {
    cidade: 'PORTO XAVIER',
    estado: 'RS',
  },
  {
    cidade: 'POUSO NOVO',
    estado: 'RS',
  },
  {
    cidade: 'PRESIDENTE LUCENA',
    estado: 'RS',
  },
  {
    cidade: 'PROGRESSO',
    estado: 'RS',
  },
  {
    cidade: 'PROTÁSIO ALVES',
    estado: 'RS',
  },
  {
    cidade: 'PUTINGA',
    estado: 'RS',
  },
  {
    cidade: 'QUARAÍ',
    estado: 'RS',
  },
  {
    cidade: 'QUATRO IRMÃOS',
    estado: 'RS',
  },
  {
    cidade: 'QUEVEDOS',
    estado: 'RS',
  },
  {
    cidade: 'QUINZE DE NOVEMBRO',
    estado: 'RS',
  },
  {
    cidade: 'REDENTORA',
    estado: 'RS',
  },
  {
    cidade: 'RELVADO',
    estado: 'RS',
  },
  {
    cidade: 'RESTINGA SÊCA',
    estado: 'RS',
  },
  {
    cidade: 'RIO DOS ÍNDIOS',
    estado: 'RS',
  },
  {
    cidade: 'RIO GRANDE',
    estado: 'RS',
  },
  {
    cidade: 'RIO PARDO',
    estado: 'RS',
  },
  {
    cidade: 'RIOZINHO',
    estado: 'RS',
  },
  {
    cidade: 'ROCA SALES',
    estado: 'RS',
  },
  {
    cidade: 'RODEIO BONITO',
    estado: 'RS',
  },
  {
    cidade: 'ROLADOR',
    estado: 'RS',
  },
  {
    cidade: 'ROLANTE',
    estado: 'RS',
  },
  {
    cidade: 'RONDA ALTA',
    estado: 'RS',
  },
  {
    cidade: 'RONDINHA',
    estado: 'RS',
  },
  {
    cidade: 'ROQUE GONZALES',
    estado: 'RS',
  },
  {
    cidade: 'ROSÁRIO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SAGRADA FAMÍLIA',
    estado: 'RS',
  },
  {
    cidade: 'SALDANHA MARINHO',
    estado: 'RS',
  },
  {
    cidade: 'SALTO DO JACUÍ',
    estado: 'RS',
  },
  {
    cidade: 'SALVADOR DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'SALVADOR DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SANANDUVA',
    estado: 'RS',
  },
  {
    cidade: 'SANTA BÁRBARA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SANTA CECÍLIA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SANTA CLARA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SANTA CRUZ DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SANTA MARIA',
    estado: 'RS',
  },
  {
    cidade: 'SANTA MARIA DO HERVAL',
    estado: 'RS',
  },
  {
    cidade: 'SANTA MARGARIDA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SANTANA DA BOA VISTA',
    estado: 'RS',
  },
  {
    cidade: "SANT'ANA DO LIVRAMENTO",
    estado: 'RS',
  },
  {
    cidade: 'SANTA ROSA',
    estado: 'RS',
  },
  {
    cidade: 'SANTA TEREZA',
    estado: 'RS',
  },
  {
    cidade: 'SANTA VITÓRIA DO PALMAR',
    estado: 'RS',
  },
  {
    cidade: 'SANTIAGO',
    estado: 'RS',
  },
  {
    cidade: 'SANTO ÂNGELO',
    estado: 'RS',
  },
  {
    cidade: 'SANTO ANTÔNIO DO PALMA',
    estado: 'RS',
  },
  {
    cidade: 'SANTO ANTÔNIO DA PATRULHA',
    estado: 'RS',
  },
  {
    cidade: 'SANTO ANTÔNIO DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'SANTO ANTÔNIO DO PLANALTO',
    estado: 'RS',
  },
  {
    cidade: 'SANTO AUGUSTO',
    estado: 'RS',
  },
  {
    cidade: 'SANTO CRISTO',
    estado: 'RS',
  },
  {
    cidade: 'SANTO EXPEDITO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO BORJA',
    estado: 'RS',
  },
  {
    cidade: 'SÃO DOMINGOS DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO FRANCISCO DE ASSIS',
    estado: 'RS',
  },
  {
    cidade: 'SÃO FRANCISCO DE PAULA',
    estado: 'RS',
  },
  {
    cidade: 'SÃO GABRIEL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JERÔNIMO',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOÃO DA URTIGA',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOÃO DO POLÊSINE',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JORGE',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DO HERVAL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DO HORTÊNCIO',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DO INHACORÁ',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DO NORTE',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DO OURO',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO JOSÉ DOS AUSENTES',
    estado: 'RS',
  },
  {
    cidade: 'SÃO LEOPOLDO',
    estado: 'RS',
  },
  {
    cidade: 'SÃO LOURENÇO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO LUIZ GONZAGA',
    estado: 'RS',
  },
  {
    cidade: 'SÃO MARCOS',
    estado: 'RS',
  },
  {
    cidade: 'SÃO MARTINHO',
    estado: 'RS',
  },
  {
    cidade: 'SÃO MARTINHO DA SERRA',
    estado: 'RS',
  },
  {
    cidade: 'SÃO MIGUEL DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'SÃO NICOLAU',
    estado: 'RS',
  },
  {
    cidade: 'SÃO PAULO DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'SÃO PEDRO DA SERRA',
    estado: 'RS',
  },
  {
    cidade: 'SÃO PEDRO DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'SÃO PEDRO DO BUTIÁ',
    estado: 'RS',
  },
  {
    cidade: 'SÃO PEDRO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO SEBASTIÃO DO CAÍ',
    estado: 'RS',
  },
  {
    cidade: 'SÃO SEPÉ',
    estado: 'RS',
  },
  {
    cidade: 'SÃO VALENTIM',
    estado: 'RS',
  },
  {
    cidade: 'SÃO VALENTIM DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO VALÉRIO DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SÃO VENDELINO',
    estado: 'RS',
  },
  {
    cidade: 'SÃO VICENTE DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SAPIRANGA',
    estado: 'RS',
  },
  {
    cidade: 'SAPUCAIA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SARANDI',
    estado: 'RS',
  },
  {
    cidade: 'SEBERI',
    estado: 'RS',
  },
  {
    cidade: 'SEDE NOVA',
    estado: 'RS',
  },
  {
    cidade: 'SEGREDO',
    estado: 'RS',
  },
  {
    cidade: 'SELBACH',
    estado: 'RS',
  },
  {
    cidade: 'SENADOR SALGADO FILHO',
    estado: 'RS',
  },
  {
    cidade: 'SENTINELA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'SERAFINA CORRÊA',
    estado: 'RS',
  },
  {
    cidade: 'SÉRIO',
    estado: 'RS',
  },
  {
    cidade: 'SERTÃO',
    estado: 'RS',
  },
  {
    cidade: 'SERTÃO SANTANA',
    estado: 'RS',
  },
  {
    cidade: 'SETE DE SETEMBRO',
    estado: 'RS',
  },
  {
    cidade: 'SEVERIANO DE ALMEIDA',
    estado: 'RS',
  },
  {
    cidade: 'SILVEIRA MARTINS',
    estado: 'RS',
  },
  {
    cidade: 'SINIMBU',
    estado: 'RS',
  },
  {
    cidade: 'SOBRADINHO',
    estado: 'RS',
  },
  {
    cidade: 'SOLEDADE',
    estado: 'RS',
  },
  {
    cidade: 'TABAÍ',
    estado: 'RS',
  },
  {
    cidade: 'TAPEJARA',
    estado: 'RS',
  },
  {
    cidade: 'TAPERA',
    estado: 'RS',
  },
  {
    cidade: 'TAPES',
    estado: 'RS',
  },
  {
    cidade: 'TAQUARA',
    estado: 'RS',
  },
  {
    cidade: 'TAQUARI',
    estado: 'RS',
  },
  {
    cidade: 'TAQUARUÇU DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'TAVARES',
    estado: 'RS',
  },
  {
    cidade: 'TENENTE PORTELA',
    estado: 'RS',
  },
  {
    cidade: 'TERRA DE AREIA',
    estado: 'RS',
  },
  {
    cidade: 'TEUTÔNIA',
    estado: 'RS',
  },
  {
    cidade: 'TIO HUGO',
    estado: 'RS',
  },
  {
    cidade: 'TIRADENTES DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'TOROPI',
    estado: 'RS',
  },
  {
    cidade: 'TORRES',
    estado: 'RS',
  },
  {
    cidade: 'TRAMANDAÍ',
    estado: 'RS',
  },
  {
    cidade: 'TRAVESSEIRO',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS ARROIOS',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS CACHOEIRAS',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS COROAS',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS DE MAIO',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS FORQUILHAS',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS PALMEIRAS',
    estado: 'RS',
  },
  {
    cidade: 'TRÊS PASSOS',
    estado: 'RS',
  },
  {
    cidade: 'TRINDADE DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'TRIUNFO',
    estado: 'RS',
  },
  {
    cidade: 'TUCUNDUVA',
    estado: 'RS',
  },
  {
    cidade: 'TUNAS',
    estado: 'RS',
  },
  {
    cidade: 'TUPANCI DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'TUPANCIRETÃ',
    estado: 'RS',
  },
  {
    cidade: 'TUPANDI',
    estado: 'RS',
  },
  {
    cidade: 'TUPARENDI',
    estado: 'RS',
  },
  {
    cidade: 'TURUÇU',
    estado: 'RS',
  },
  {
    cidade: 'UBIRETAMA',
    estado: 'RS',
  },
  {
    cidade: 'UNIÃO DA SERRA',
    estado: 'RS',
  },
  {
    cidade: 'UNISTALDA',
    estado: 'RS',
  },
  {
    cidade: 'URUGUAIANA',
    estado: 'RS',
  },
  {
    cidade: 'VACARIA',
    estado: 'RS',
  },
  {
    cidade: 'VALE VERDE',
    estado: 'RS',
  },
  {
    cidade: 'VALE DO SOL',
    estado: 'RS',
  },
  {
    cidade: 'VALE REAL',
    estado: 'RS',
  },
  {
    cidade: 'VANINI',
    estado: 'RS',
  },
  {
    cidade: 'VENÂNCIO AIRES',
    estado: 'RS',
  },
  {
    cidade: 'VERA CRUZ',
    estado: 'RS',
  },
  {
    cidade: 'VERANÓPOLIS',
    estado: 'RS',
  },
  {
    cidade: 'VESPASIANO CORRÊA',
    estado: 'RS',
  },
  {
    cidade: 'VIADUTOS',
    estado: 'RS',
  },
  {
    cidade: 'VIAMÃO',
    estado: 'RS',
  },
  {
    cidade: 'VICENTE DUTRA',
    estado: 'RS',
  },
  {
    cidade: 'VICTOR GRAEFF',
    estado: 'RS',
  },
  {
    cidade: 'VILA FLORES',
    estado: 'RS',
  },
  {
    cidade: 'VILA LÂNGARO',
    estado: 'RS',
  },
  {
    cidade: 'VILA MARIA',
    estado: 'RS',
  },
  {
    cidade: 'VILA NOVA DO SUL',
    estado: 'RS',
  },
  {
    cidade: 'VISTA ALEGRE',
    estado: 'RS',
  },
  {
    cidade: 'VISTA ALEGRE DO PRATA',
    estado: 'RS',
  },
  {
    cidade: 'VISTA GAÚCHA',
    estado: 'RS',
  },
  {
    cidade: 'VITÓRIA DAS MISSÕES',
    estado: 'RS',
  },
  {
    cidade: 'WESTFÁLIA',
    estado: 'RS',
  },
  {
    cidade: 'XANGRI-LÁ',
    estado: 'RS',
  },
  {
    cidade: 'ÁGUA CLARA',
    estado: 'MS',
  },
  {
    cidade: 'ALCINÓPOLIS',
    estado: 'MS',
  },
  {
    cidade: 'AMAMBAI',
    estado: 'MS',
  },
  {
    cidade: 'ANASTÁCIO',
    estado: 'MS',
  },
  {
    cidade: 'ANAURILÂNDIA',
    estado: 'MS',
  },
  {
    cidade: 'ANGÉLICA',
    estado: 'MS',
  },
  {
    cidade: 'ANTÔNIO JOÃO',
    estado: 'MS',
  },
  {
    cidade: 'APARECIDA DO TABOADO',
    estado: 'MS',
  },
  {
    cidade: 'AQUIDAUANA',
    estado: 'MS',
  },
  {
    cidade: 'ARAL MOREIRA',
    estado: 'MS',
  },
  {
    cidade: 'BANDEIRANTES',
    estado: 'MS',
  },
  {
    cidade: 'BATAGUASSU',
    estado: 'MS',
  },
  {
    cidade: 'BATAYPORÃ',
    estado: 'MS',
  },
  {
    cidade: 'BELA VISTA',
    estado: 'MS',
  },
  {
    cidade: 'BODOQUENA',
    estado: 'MS',
  },
  {
    cidade: 'BONITO',
    estado: 'MS',
  },
  {
    cidade: 'BRASILÂNDIA',
    estado: 'MS',
  },
  {
    cidade: 'CAARAPÓ',
    estado: 'MS',
  },
  {
    cidade: 'CAMAPUÃ',
    estado: 'MS',
  },
  {
    cidade: 'CAMPO GRANDE',
    estado: 'MS',
  },
  {
    cidade: 'CARACOL',
    estado: 'MS',
  },
  {
    cidade: 'CASSILÂNDIA',
    estado: 'MS',
  },
  {
    cidade: 'CHAPADÃO DO SUL',
    estado: 'MS',
  },
  {
    cidade: 'CORGUINHO',
    estado: 'MS',
  },
  {
    cidade: 'CORONEL SAPUCAIA',
    estado: 'MS',
  },
  {
    cidade: 'CORUMBÁ',
    estado: 'MS',
  },
  {
    cidade: 'COSTA RICA',
    estado: 'MS',
  },
  {
    cidade: 'COXIM',
    estado: 'MS',
  },
  {
    cidade: 'DEODÁPOLIS',
    estado: 'MS',
  },
  {
    cidade: 'DOIS IRMÃOS DO BURITI',
    estado: 'MS',
  },
  {
    cidade: 'DOURADINA',
    estado: 'MS',
  },
  {
    cidade: 'DOURADOS',
    estado: 'MS',
  },
  {
    cidade: 'ELDORADO',
    estado: 'MS',
  },
  {
    cidade: 'FÁTIMA DO SUL',
    estado: 'MS',
  },
  {
    cidade: 'FIGUEIRÃO',
    estado: 'MS',
  },
  {
    cidade: 'GLÓRIA DE DOURADOS',
    estado: 'MS',
  },
  {
    cidade: 'GUIA LOPES DA LAGUNA',
    estado: 'MS',
  },
  {
    cidade: 'IGUATEMI',
    estado: 'MS',
  },
  {
    cidade: 'INOCÊNCIA',
    estado: 'MS',
  },
  {
    cidade: 'ITAPORÃ',
    estado: 'MS',
  },
  {
    cidade: 'ITAQUIRAÍ',
    estado: 'MS',
  },
  {
    cidade: 'IVINHEMA',
    estado: 'MS',
  },
  {
    cidade: 'JAPORÃ',
    estado: 'MS',
  },
  {
    cidade: 'JARAGUARI',
    estado: 'MS',
  },
  {
    cidade: 'JARDIM',
    estado: 'MS',
  },
  {
    cidade: 'JATEÍ',
    estado: 'MS',
  },
  {
    cidade: 'JUTI',
    estado: 'MS',
  },
  {
    cidade: 'LADÁRIO',
    estado: 'MS',
  },
  {
    cidade: 'LAGUNA CARAPÃ',
    estado: 'MS',
  },
  {
    cidade: 'MARACAJU',
    estado: 'MS',
  },
  {
    cidade: 'MIRANDA',
    estado: 'MS',
  },
  {
    cidade: 'MUNDO NOVO',
    estado: 'MS',
  },
  {
    cidade: 'NAVIRAÍ',
    estado: 'MS',
  },
  {
    cidade: 'NIOAQUE',
    estado: 'MS',
  },
  {
    cidade: 'NOVA ALVORADA DO SUL',
    estado: 'MS',
  },
  {
    cidade: 'NOVA ANDRADINA',
    estado: 'MS',
  },
  {
    cidade: 'NOVO HORIZONTE DO SUL',
    estado: 'MS',
  },
  {
    cidade: 'PARAÍSO DAS ÁGUAS',
    estado: 'MS',
  },
  {
    cidade: 'PARANAÍBA',
    estado: 'MS',
  },
  {
    cidade: 'PARANHOS',
    estado: 'MS',
  },
  {
    cidade: 'PEDRO GOMES',
    estado: 'MS',
  },
  {
    cidade: 'PONTA PORÃ',
    estado: 'MS',
  },
  {
    cidade: 'PORTO MURTINHO',
    estado: 'MS',
  },
  {
    cidade: 'RIBAS DO RIO PARDO',
    estado: 'MS',
  },
  {
    cidade: 'RIO BRILHANTE',
    estado: 'MS',
  },
  {
    cidade: 'RIO NEGRO',
    estado: 'MS',
  },
  {
    cidade: 'RIO VERDE DE MATO GROSSO',
    estado: 'MS',
  },
  {
    cidade: 'ROCHEDO',
    estado: 'MS',
  },
  {
    cidade: 'SANTA RITA DO PARDO',
    estado: 'MS',
  },
  {
    cidade: 'SÃO GABRIEL DO OESTE',
    estado: 'MS',
  },
  {
    cidade: 'SETE QUEDAS',
    estado: 'MS',
  },
  {
    cidade: 'SELVÍRIA',
    estado: 'MS',
  },
  {
    cidade: 'SIDROLÂNDIA',
    estado: 'MS',
  },
  {
    cidade: 'SONORA',
    estado: 'MS',
  },
  {
    cidade: 'TACURU',
    estado: 'MS',
  },
  {
    cidade: 'TAQUARUSSU',
    estado: 'MS',
  },
  {
    cidade: 'TERENOS',
    estado: 'MS',
  },
  {
    cidade: 'TRÊS LAGOAS',
    estado: 'MS',
  },
  {
    cidade: 'VICENTINA',
    estado: 'MS',
  },
  {
    cidade: 'ACORIZAL',
    estado: 'MT',
  },
  {
    cidade: 'ÁGUA BOA',
    estado: 'MT',
  },
  {
    cidade: 'ALTA FLORESTA',
    estado: 'MT',
  },
  {
    cidade: 'ALTO ARAGUAIA',
    estado: 'MT',
  },
  {
    cidade: 'ALTO BOA VISTA',
    estado: 'MT',
  },
  {
    cidade: 'ALTO GARÇAS',
    estado: 'MT',
  },
  {
    cidade: 'ALTO PARAGUAI',
    estado: 'MT',
  },
  {
    cidade: 'ALTO TAQUARI',
    estado: 'MT',
  },
  {
    cidade: 'APIACÁS',
    estado: 'MT',
  },
  {
    cidade: 'ARAGUAIANA',
    estado: 'MT',
  },
  {
    cidade: 'ARAGUAINHA',
    estado: 'MT',
  },
  {
    cidade: 'ARAPUTANGA',
    estado: 'MT',
  },
  {
    cidade: 'ARENÁPOLIS',
    estado: 'MT',
  },
  {
    cidade: 'ARIPUANÃ',
    estado: 'MT',
  },
  {
    cidade: 'BARÃO DE MELGAÇO',
    estado: 'MT',
  },
  {
    cidade: 'BARRA DO BUGRES',
    estado: 'MT',
  },
  {
    cidade: 'BARRA DO GARÇAS',
    estado: 'MT',
  },
  {
    cidade: 'BOM JESUS DO ARAGUAIA',
    estado: 'MT',
  },
  {
    cidade: 'BRASNORTE',
    estado: 'MT',
  },
  {
    cidade: 'CÁCERES',
    estado: 'MT',
  },
  {
    cidade: 'CAMPINÁPOLIS',
    estado: 'MT',
  },
  {
    cidade: 'CAMPO NOVO DO PARECIS',
    estado: 'MT',
  },
  {
    cidade: 'CAMPO VERDE',
    estado: 'MT',
  },
  {
    cidade: 'CAMPOS DE JÚLIO',
    estado: 'MT',
  },
  {
    cidade: 'CANABRAVA DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'CANARANA',
    estado: 'MT',
  },
  {
    cidade: 'CARLINDA',
    estado: 'MT',
  },
  {
    cidade: 'CASTANHEIRA',
    estado: 'MT',
  },
  {
    cidade: 'CHAPADA DOS GUIMARÃES',
    estado: 'MT',
  },
  {
    cidade: 'CLÁUDIA',
    estado: 'MT',
  },
  {
    cidade: 'COCALINHO',
    estado: 'MT',
  },
  {
    cidade: 'COLÍDER',
    estado: 'MT',
  },
  {
    cidade: 'COLNIZA',
    estado: 'MT',
  },
  {
    cidade: 'COMODORO',
    estado: 'MT',
  },
  {
    cidade: 'CONFRESA',
    estado: 'MT',
  },
  {
    cidade: "CONQUISTA D'OESTE",
    estado: 'MT',
  },
  {
    cidade: 'COTRIGUAÇU',
    estado: 'MT',
  },
  {
    cidade: 'CUIABÁ',
    estado: 'MT',
  },
  {
    cidade: 'CURVELÂNDIA',
    estado: 'MT',
  },
  {
    cidade: 'DENISE',
    estado: 'MT',
  },
  {
    cidade: 'DIAMANTINO',
    estado: 'MT',
  },
  {
    cidade: 'DOM AQUINO',
    estado: 'MT',
  },
  {
    cidade: 'FELIZ NATAL',
    estado: 'MT',
  },
  {
    cidade: "FIGUEIRÓPOLIS D'OESTE",
    estado: 'MT',
  },
  {
    cidade: 'GAÚCHA DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'GENERAL CARNEIRO',
    estado: 'MT',
  },
  {
    cidade: "GLÓRIA D'OESTE",
    estado: 'MT',
  },
  {
    cidade: 'GUARANTÃ DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'GUIRATINGA',
    estado: 'MT',
  },
  {
    cidade: 'INDIAVAÍ',
    estado: 'MT',
  },
  {
    cidade: 'IPIRANGA DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'ITANHANGÁ',
    estado: 'MT',
  },
  {
    cidade: 'ITAÚBA',
    estado: 'MT',
  },
  {
    cidade: 'ITIQUIRA',
    estado: 'MT',
  },
  {
    cidade: 'JACIARA',
    estado: 'MT',
  },
  {
    cidade: 'JANGADA',
    estado: 'MT',
  },
  {
    cidade: 'JAURU',
    estado: 'MT',
  },
  {
    cidade: 'JUARA',
    estado: 'MT',
  },
  {
    cidade: 'JUÍNA',
    estado: 'MT',
  },
  {
    cidade: 'JURUENA',
    estado: 'MT',
  },
  {
    cidade: 'JUSCIMEIRA',
    estado: 'MT',
  },
  {
    cidade: "LAMBARI D'OESTE",
    estado: 'MT',
  },
  {
    cidade: 'LUCAS DO RIO VERDE',
    estado: 'MT',
  },
  {
    cidade: 'LUCIARA',
    estado: 'MT',
  },
  {
    cidade: 'VILA BELA DA SANTÍSSIMA TRINDADE',
    estado: 'MT',
  },
  {
    cidade: 'MARCELÂNDIA',
    estado: 'MT',
  },
  {
    cidade: 'MATUPÁ',
    estado: 'MT',
  },
  {
    cidade: "MIRASSOL D'OESTE",
    estado: 'MT',
  },
  {
    cidade: 'NOBRES',
    estado: 'MT',
  },
  {
    cidade: 'NORTELÂNDIA',
    estado: 'MT',
  },
  {
    cidade: 'NOSSA SENHORA DO LIVRAMENTO',
    estado: 'MT',
  },
  {
    cidade: 'NOVA BANDEIRANTES',
    estado: 'MT',
  },
  {
    cidade: 'NOVA NAZARÉ',
    estado: 'MT',
  },
  {
    cidade: 'NOVA LACERDA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA SANTA HELENA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA BRASILÂNDIA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA CANAÃ DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'NOVA MUTUM',
    estado: 'MT',
  },
  {
    cidade: 'NOVA OLÍMPIA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA UBIRATÃ',
    estado: 'MT',
  },
  {
    cidade: 'NOVA XAVANTINA',
    estado: 'MT',
  },
  {
    cidade: 'NOVO MUNDO',
    estado: 'MT',
  },
  {
    cidade: 'NOVO HORIZONTE DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'NOVO SÃO JOAQUIM',
    estado: 'MT',
  },
  {
    cidade: 'PARANAÍTA',
    estado: 'MT',
  },
  {
    cidade: 'PARANATINGA',
    estado: 'MT',
  },
  {
    cidade: 'NOVO SANTO ANTÔNIO',
    estado: 'MT',
  },
  {
    cidade: 'PEDRA PRETA',
    estado: 'MT',
  },
  {
    cidade: 'PEIXOTO DE AZEVEDO',
    estado: 'MT',
  },
  {
    cidade: 'PLANALTO DA SERRA',
    estado: 'MT',
  },
  {
    cidade: 'POCONÉ',
    estado: 'MT',
  },
  {
    cidade: 'PONTAL DO ARAGUAIA',
    estado: 'MT',
  },
  {
    cidade: 'PONTE BRANCA',
    estado: 'MT',
  },
  {
    cidade: 'PONTES E LACERDA',
    estado: 'MT',
  },
  {
    cidade: 'PORTO ALEGRE DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'PORTO DOS GAÚCHOS',
    estado: 'MT',
  },
  {
    cidade: 'PORTO ESPERIDIÃO',
    estado: 'MT',
  },
  {
    cidade: 'PORTO ESTRELA',
    estado: 'MT',
  },
  {
    cidade: 'POXORÉU',
    estado: 'MT',
  },
  {
    cidade: 'PRIMAVERA DO LESTE',
    estado: 'MT',
  },
  {
    cidade: 'QUERÊNCIA',
    estado: 'MT',
  },
  {
    cidade: 'SÃO JOSÉ DOS QUATRO MARCOS',
    estado: 'MT',
  },
  {
    cidade: 'RESERVA DO CABAÇAL',
    estado: 'MT',
  },
  {
    cidade: 'RIBEIRÃO CASCALHEIRA',
    estado: 'MT',
  },
  {
    cidade: 'RIBEIRÃOZINHO',
    estado: 'MT',
  },
  {
    cidade: 'RIO BRANCO',
    estado: 'MT',
  },
  {
    cidade: 'SANTA CARMEM',
    estado: 'MT',
  },
  {
    cidade: 'SANTO AFONSO',
    estado: 'MT',
  },
  {
    cidade: 'SÃO JOSÉ DO POVO',
    estado: 'MT',
  },
  {
    cidade: 'SÃO JOSÉ DO RIO CLARO',
    estado: 'MT',
  },
  {
    cidade: 'SÃO JOSÉ DO XINGU',
    estado: 'MT',
  },
  {
    cidade: 'SÃO PEDRO DA CIPA',
    estado: 'MT',
  },
  {
    cidade: 'RONDOLÂNDIA',
    estado: 'MT',
  },
  {
    cidade: 'RONDONÓPOLIS',
    estado: 'MT',
  },
  {
    cidade: 'ROSÁRIO OESTE',
    estado: 'MT',
  },
  {
    cidade: 'SANTA CRUZ DO XINGU',
    estado: 'MT',
  },
  {
    cidade: 'SALTO DO CÉU',
    estado: 'MT',
  },
  {
    cidade: 'SANTA RITA DO TRIVELATO',
    estado: 'MT',
  },
  {
    cidade: 'SANTA TEREZINHA',
    estado: 'MT',
  },
  {
    cidade: 'SANTO ANTÔNIO DO LESTE',
    estado: 'MT',
  },
  {
    cidade: 'SANTO ANTÔNIO DE LEVERGER',
    estado: 'MT',
  },
  {
    cidade: 'SÃO FÉLIX DO ARAGUAIA',
    estado: 'MT',
  },
  {
    cidade: 'SAPEZAL',
    estado: 'MT',
  },
  {
    cidade: 'SERRA NOVA DOURADA',
    estado: 'MT',
  },
  {
    cidade: 'SINOP',
    estado: 'MT',
  },
  {
    cidade: 'SORRISO',
    estado: 'MT',
  },
  {
    cidade: 'TABAPORÃ',
    estado: 'MT',
  },
  {
    cidade: 'TANGARÁ DA SERRA',
    estado: 'MT',
  },
  {
    cidade: 'TAPURAH',
    estado: 'MT',
  },
  {
    cidade: 'TERRA NOVA DO NORTE',
    estado: 'MT',
  },
  {
    cidade: 'TESOURO',
    estado: 'MT',
  },
  {
    cidade: 'TORIXORÉU',
    estado: 'MT',
  },
  {
    cidade: 'UNIÃO DO SUL',
    estado: 'MT',
  },
  {
    cidade: 'VALE DE SÃO DOMINGOS',
    estado: 'MT',
  },
  {
    cidade: 'VÁRZEA GRANDE',
    estado: 'MT',
  },
  {
    cidade: 'VERA',
    estado: 'MT',
  },
  {
    cidade: 'VILA RICA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA GUARITA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA MARILÂNDIA',
    estado: 'MT',
  },
  {
    cidade: 'NOVA MARINGÁ',
    estado: 'MT',
  },
  {
    cidade: 'NOVA MONTE VERDE',
    estado: 'MT',
  },
  {
    cidade: 'ABADIA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'ABADIÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'ACREÚNA',
    estado: 'GO',
  },
  {
    cidade: 'ADELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'ÁGUA FRIA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'ÁGUA LIMPA',
    estado: 'GO',
  },
  {
    cidade: 'ÁGUAS LINDAS DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'ALEXÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'ALOÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'ALTO HORIZONTE',
    estado: 'GO',
  },
  {
    cidade: 'ALTO PARAÍSO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'ALVORADA DO NORTE',
    estado: 'GO',
  },
  {
    cidade: 'AMARALINA',
    estado: 'GO',
  },
  {
    cidade: 'AMERICANO DO BRASIL',
    estado: 'GO',
  },
  {
    cidade: 'AMORINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'ANÁPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'ANHANGUERA',
    estado: 'GO',
  },
  {
    cidade: 'ANICUNS',
    estado: 'GO',
  },
  {
    cidade: 'APARECIDA DE GOIÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'APARECIDA DO RIO DOCE',
    estado: 'GO',
  },
  {
    cidade: 'APORÉ',
    estado: 'GO',
  },
  {
    cidade: 'ARAÇU',
    estado: 'GO',
  },
  {
    cidade: 'ARAGARÇAS',
    estado: 'GO',
  },
  {
    cidade: 'ARAGOIÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'ARAGUAPAZ',
    estado: 'GO',
  },
  {
    cidade: 'ARENÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'ARUANÃ',
    estado: 'GO',
  },
  {
    cidade: 'AURILÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'AVELINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'BALIZA',
    estado: 'GO',
  },
  {
    cidade: 'BARRO ALTO',
    estado: 'GO',
  },
  {
    cidade: 'BELA VISTA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'BOM JARDIM DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'BOM JESUS DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'BONFINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'BONÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'BRAZABRANTES',
    estado: 'GO',
  },
  {
    cidade: 'BRITÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'BURITI ALEGRE',
    estado: 'GO',
  },
  {
    cidade: 'BURITI DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'BURITINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'CABECEIRAS',
    estado: 'GO',
  },
  {
    cidade: 'CACHOEIRA ALTA',
    estado: 'GO',
  },
  {
    cidade: 'CACHOEIRA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'CACHOEIRA DOURADA',
    estado: 'GO',
  },
  {
    cidade: 'CAÇU',
    estado: 'GO',
  },
  {
    cidade: 'CAIAPÔNIA',
    estado: 'GO',
  },
  {
    cidade: 'CALDAS NOVAS',
    estado: 'GO',
  },
  {
    cidade: 'CALDAZINHA',
    estado: 'GO',
  },
  {
    cidade: 'CAMPESTRE DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'CAMPINAÇU',
    estado: 'GO',
  },
  {
    cidade: 'CAMPINORTE',
    estado: 'GO',
  },
  {
    cidade: 'CAMPO ALEGRE DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'CAMPO LIMPO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'CAMPOS BELOS',
    estado: 'GO',
  },
  {
    cidade: 'CAMPOS VERDES',
    estado: 'GO',
  },
  {
    cidade: 'CARMO DO RIO VERDE',
    estado: 'GO',
  },
  {
    cidade: 'CASTELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'CATALÃO',
    estado: 'GO',
  },
  {
    cidade: 'CATURAÍ',
    estado: 'GO',
  },
  {
    cidade: 'CAVALCANTE',
    estado: 'GO',
  },
  {
    cidade: 'CERES',
    estado: 'GO',
  },
  {
    cidade: 'CEZARINA',
    estado: 'GO',
  },
  {
    cidade: 'CHAPADÃO DO CÉU',
    estado: 'GO',
  },
  {
    cidade: 'CIDADE OCIDENTAL',
    estado: 'GO',
  },
  {
    cidade: 'COCALZINHO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'COLINAS DO SUL',
    estado: 'GO',
  },
  {
    cidade: 'CÓRREGO DO OURO',
    estado: 'GO',
  },
  {
    cidade: 'CORUMBÁ DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'CORUMBAÍBA',
    estado: 'GO',
  },
  {
    cidade: 'CRISTALINA',
    estado: 'GO',
  },
  {
    cidade: 'CRISTIANÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'CRIXÁS',
    estado: 'GO',
  },
  {
    cidade: 'CROMÍNIA',
    estado: 'GO',
  },
  {
    cidade: 'CUMARI',
    estado: 'GO',
  },
  {
    cidade: 'DAMIANÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'DAMOLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'DAVINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'DIORAMA',
    estado: 'GO',
  },
  {
    cidade: 'DOVERLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'EDEALINA',
    estado: 'GO',
  },
  {
    cidade: 'EDÉIA',
    estado: 'GO',
  },
  {
    cidade: 'ESTRELA DO NORTE',
    estado: 'GO',
  },
  {
    cidade: 'FAINA',
    estado: 'GO',
  },
  {
    cidade: 'FAZENDA NOVA',
    estado: 'GO',
  },
  {
    cidade: 'FIRMINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'FLORES DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'FORMOSA',
    estado: 'GO',
  },
  {
    cidade: 'FORMOSO',
    estado: 'GO',
  },
  {
    cidade: 'GAMELEIRA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'DIVINÓPOLIS DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'GOIANÁPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'GOIANDIRA',
    estado: 'GO',
  },
  {
    cidade: 'GOIANÉSIA',
    estado: 'GO',
  },
  {
    cidade: 'GOIÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'GOIANIRA',
    estado: 'GO',
  },
  {
    cidade: 'GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'GOIATUBA',
    estado: 'GO',
  },
  {
    cidade: 'GOUVELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'GUAPÓ',
    estado: 'GO',
  },
  {
    cidade: 'GUARAÍTA',
    estado: 'GO',
  },
  {
    cidade: 'GUARANI DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'GUARINOS',
    estado: 'GO',
  },
  {
    cidade: 'HEITORAÍ',
    estado: 'GO',
  },
  {
    cidade: 'HIDROLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'HIDROLINA',
    estado: 'GO',
  },
  {
    cidade: 'IACIARA',
    estado: 'GO',
  },
  {
    cidade: 'INACIOLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'INDIARA',
    estado: 'GO',
  },
  {
    cidade: 'INHUMAS',
    estado: 'GO',
  },
  {
    cidade: 'IPAMERI',
    estado: 'GO',
  },
  {
    cidade: 'IPIRANGA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'IPORÁ',
    estado: 'GO',
  },
  {
    cidade: 'ISRAELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'ITABERAÍ',
    estado: 'GO',
  },
  {
    cidade: 'ITAGUARI',
    estado: 'GO',
  },
  {
    cidade: 'ITAGUARU',
    estado: 'GO',
  },
  {
    cidade: 'ITAJÁ',
    estado: 'GO',
  },
  {
    cidade: 'ITAPACI',
    estado: 'GO',
  },
  {
    cidade: 'ITAPIRAPUÃ',
    estado: 'GO',
  },
  {
    cidade: 'ITAPURANGA',
    estado: 'GO',
  },
  {
    cidade: 'ITARUMÃ',
    estado: 'GO',
  },
  {
    cidade: 'ITAUÇU',
    estado: 'GO',
  },
  {
    cidade: 'ITUMBIARA',
    estado: 'GO',
  },
  {
    cidade: 'IVOLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'JANDAIA',
    estado: 'GO',
  },
  {
    cidade: 'JARAGUÁ',
    estado: 'GO',
  },
  {
    cidade: 'JATAÍ',
    estado: 'GO',
  },
  {
    cidade: 'JAUPACI',
    estado: 'GO',
  },
  {
    cidade: 'JESÚPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'JOVIÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'JUSSARA',
    estado: 'GO',
  },
  {
    cidade: 'LAGOA SANTA',
    estado: 'GO',
  },
  {
    cidade: 'LEOPOLDO DE BULHÕES',
    estado: 'GO',
  },
  {
    cidade: 'LUZIÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'MAIRIPOTABA',
    estado: 'GO',
  },
  {
    cidade: 'MAMBAÍ',
    estado: 'GO',
  },
  {
    cidade: 'MARA ROSA',
    estado: 'GO',
  },
  {
    cidade: 'MARZAGÃO',
    estado: 'GO',
  },
  {
    cidade: 'MATRINCHÃ',
    estado: 'GO',
  },
  {
    cidade: 'MAURILÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'MIMOSO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'MINAÇU',
    estado: 'GO',
  },
  {
    cidade: 'MINEIROS',
    estado: 'GO',
  },
  {
    cidade: 'MOIPORÁ',
    estado: 'GO',
  },
  {
    cidade: 'MONTE ALEGRE DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'MONTES CLAROS DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'MONTIVIDIU',
    estado: 'GO',
  },
  {
    cidade: 'MONTIVIDIU DO NORTE',
    estado: 'GO',
  },
  {
    cidade: 'MORRINHOS',
    estado: 'GO',
  },
  {
    cidade: 'MORRO AGUDO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'MOSSÂMEDES',
    estado: 'GO',
  },
  {
    cidade: 'MOZARLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'MUNDO NOVO',
    estado: 'GO',
  },
  {
    cidade: 'MUTUNÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'NAZÁRIO',
    estado: 'GO',
  },
  {
    cidade: 'NERÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'NIQUELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'NOVA AMÉRICA',
    estado: 'GO',
  },
  {
    cidade: 'NOVA AURORA',
    estado: 'GO',
  },
  {
    cidade: 'NOVA CRIXÁS',
    estado: 'GO',
  },
  {
    cidade: 'NOVA GLÓRIA',
    estado: 'GO',
  },
  {
    cidade: 'NOVA IGUAÇU DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'NOVA ROMA',
    estado: 'GO',
  },
  {
    cidade: 'NOVA VENEZA',
    estado: 'GO',
  },
  {
    cidade: 'NOVO BRASIL',
    estado: 'GO',
  },
  {
    cidade: 'NOVO GAMA',
    estado: 'GO',
  },
  {
    cidade: 'NOVO PLANALTO',
    estado: 'GO',
  },
  {
    cidade: 'ORIZONA',
    estado: 'GO',
  },
  {
    cidade: 'OURO VERDE DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'OUVIDOR',
    estado: 'GO',
  },
  {
    cidade: 'PADRE BERNARDO',
    estado: 'GO',
  },
  {
    cidade: 'PALESTINA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'PALMEIRAS DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'PALMELO',
    estado: 'GO',
  },
  {
    cidade: 'PALMINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'PANAMÁ',
    estado: 'GO',
  },
  {
    cidade: 'PARANAIGUARA',
    estado: 'GO',
  },
  {
    cidade: 'PARAÚNA',
    estado: 'GO',
  },
  {
    cidade: 'PEROLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'PETROLINA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'PILAR DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'PIRACANJUBA',
    estado: 'GO',
  },
  {
    cidade: 'PIRANHAS',
    estado: 'GO',
  },
  {
    cidade: 'PIRENÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'PIRES DO RIO',
    estado: 'GO',
  },
  {
    cidade: 'PLANALTINA',
    estado: 'GO',
  },
  {
    cidade: 'PONTALINA',
    estado: 'GO',
  },
  {
    cidade: 'PORANGATU',
    estado: 'GO',
  },
  {
    cidade: 'PORTEIRÃO',
    estado: 'GO',
  },
  {
    cidade: 'PORTELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'POSSE',
    estado: 'GO',
  },
  {
    cidade: 'PROFESSOR JAMIL',
    estado: 'GO',
  },
  {
    cidade: 'QUIRINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'RIALMA',
    estado: 'GO',
  },
  {
    cidade: 'RIANÁPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'RIO QUENTE',
    estado: 'GO',
  },
  {
    cidade: 'RIO VERDE',
    estado: 'GO',
  },
  {
    cidade: 'RUBIATABA',
    estado: 'GO',
  },
  {
    cidade: 'SANCLERLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'SANTA BÁRBARA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTA CRUZ DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTA FÉ DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTA HELENA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTA ISABEL',
    estado: 'GO',
  },
  {
    cidade: 'SANTA RITA DO ARAGUAIA',
    estado: 'GO',
  },
  {
    cidade: 'SANTA RITA DO NOVO DESTINO',
    estado: 'GO',
  },
  {
    cidade: 'SANTA ROSA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTA TEREZA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTA TEREZINHA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTO ANTÔNIO DA BARRA',
    estado: 'GO',
  },
  {
    cidade: 'SANTO ANTÔNIO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'SANTO ANTÔNIO DO DESCOBERTO',
    estado: 'GO',
  },
  {
    cidade: 'SÃO DOMINGOS',
    estado: 'GO',
  },
  {
    cidade: 'SÃO FRANCISCO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: "SÃO JOÃO D'ALIANÇA",
    estado: 'GO',
  },
  {
    cidade: 'SÃO JOÃO DA PARAÚNA',
    estado: 'GO',
  },
  {
    cidade: 'SÃO LUÍS DE MONTES BELOS',
    estado: 'GO',
  },
  {
    cidade: 'SÃO LUIZ DO NORTE',
    estado: 'GO',
  },
  {
    cidade: 'SÃO MIGUEL DO ARAGUAIA',
    estado: 'GO',
  },
  {
    cidade: 'SÃO MIGUEL DO PASSA QUATRO',
    estado: 'GO',
  },
  {
    cidade: 'SÃO PATRÍCIO',
    estado: 'GO',
  },
  {
    cidade: 'SÃO SIMÃO',
    estado: 'GO',
  },
  {
    cidade: 'SENADOR CANEDO',
    estado: 'GO',
  },
  {
    cidade: 'SERRANÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'SILVÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'SIMOLÂNDIA',
    estado: 'GO',
  },
  {
    cidade: "SÍTIO D'ABADIA",
    estado: 'GO',
  },
  {
    cidade: 'TAQUARAL DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'TERESINA DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'TEREZÓPOLIS DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'TRÊS RANCHOS',
    estado: 'GO',
  },
  {
    cidade: 'TRINDADE',
    estado: 'GO',
  },
  {
    cidade: 'TROMBAS',
    estado: 'GO',
  },
  {
    cidade: 'TURVÂNIA',
    estado: 'GO',
  },
  {
    cidade: 'TURVELÂNDIA',
    estado: 'GO',
  },
  {
    cidade: 'UIRAPURU',
    estado: 'GO',
  },
  {
    cidade: 'URUAÇU',
    estado: 'GO',
  },
  {
    cidade: 'URUANA',
    estado: 'GO',
  },
  {
    cidade: 'URUTAÍ',
    estado: 'GO',
  },
  {
    cidade: 'VALPARAÍSO DE GOIÁS',
    estado: 'GO',
  },
  {
    cidade: 'VARJÃO',
    estado: 'GO',
  },
  {
    cidade: 'VIANÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'VICENTINÓPOLIS',
    estado: 'GO',
  },
  {
    cidade: 'VILA BOA',
    estado: 'GO',
  },
  {
    cidade: 'VILA PROPÍCIO',
    estado: 'GO',
  },
  {
    cidade: 'BRASÍLIA',
    estado: 'DF',
  },
];

export default cities;
