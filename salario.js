import input from "readline-sync";

let dados = [
  { ano: "2010", salario: "510", ipca: "5,91%" },
  { ano: "2011", salario: "545", ipca: "6,50%" },
  { ano: "2012", salario: "622", ipca: "5,84%" },
  { ano: "2013", salario: "678", ipca: "5,91%" },
  { ano: "2014", salario: "724", ipca: "6,41%" },
  { ano: "2015", salario: "788", ipca: "10,67%" },
  { ano: "2016", salario: "880", ipca: "6,29%" },
  { ano: "2017", salario: "937", ipca: "2,95%" },
  { ano: "2018", salario: "954", ipca: "3,75%" },
  { ano: "2019", salario: "998", ipca: "4,31%" },
  { ano: "2020", salario: "1045", ipca: "4,52%" },
];

const perc_cresc = (sal_ano, sal_ant) => {
  let diferenca = sal_ano - sal_ant;
  let percentual = (diferenca / sal_ant) * 100;
  return percentual;
};

console.log(`Digite a oção desejada:
1 - Listar os salários mímimos de 2010 à 2020
2 - Listar o índice IPCA de 2010 à 2020 
3 - Comparação entre o percentual de aumento salarial e o IPCA 

`);

let opcao = input.question(`Digite o número da sua escolha: `);

switch (opcao) {
  case "1":
    for (let info of dados) {
      console.log("Ano:".padEnd(30, ".") + info.ano);
      console.log(
        "Salário:".padEnd(30, ".") + "R$ " + info.salario + ",00\n\n"
      );
    }

    break;

  case "2":
    for (let info of dados) {
      console.log("Ano:".padEnd(30, ".") + info.ano);
      console.log("IPCA:".padEnd(30, ".") + info.ipca + "\n\n");
    }

    break;

  case "3":
    for (let info in dados) {
      let ant = info - 1;

      console.log("Ano:".padEnd(30, ".") + dados[info].ano);
      console.log(
        "Salário:".padEnd(30, ".") + "R$ " + dados[info].salario + ",00"
      );

      if (dados[info].ano == 2010) {
        console.log("Crescimento Salarial:".padEnd(30, ".") + "-");
        console.log("IPCA:".padEnd(30, ".") + dados[info].ipca + "\n\n");
      } else {
        console.log(
          "Crescimento Salarial:".padEnd(30, ".") +
            perc_cresc(dados[info].salario, dados[ant].salario).toFixed(2) +
            "%"
        );
        console.log("IPCA:".padEnd(30, ".") + dados[info].ipca + "\n\n");
      }
    }

    break;

  default:
    console.log("Opção incorreta!");

    break;
}