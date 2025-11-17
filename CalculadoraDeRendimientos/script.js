document.addEventListener("DOMContentLoaded", () => {
    /* === REFERENCIAS PRINCIPALES === */
    const galeria = document.getElementById("galeria");
    const detalleTractor = document.getElementById("detalle");
    const detalleTrailla = document.getElementById("detalle-mototrailla");
    const detalleCargador = document.getElementById("detalle-cargador");
    const detalleRetroexcavadora = document.getElementById("detalle-retroexcavadora");

    const tituloTractor = document.getElementById("titulo-modelo");
    const tituloTrailla = document.getElementById("titulo-trailla");
    const tituloCargador = document.getElementById("titulo-cargador");
    const tituloRetroexcavadora = document.getElementById("titulo-retroexcavadora");

    const calcularTractor = document.getElementById("calcular");
    const calcularTrailla = document.getElementById("calcularT");
    const calcularCargador = document.getElementById("calcularCargador");
    const calcularRetroexcavadora = document.getElementById("calcularRetroexcavadora");

    const volverTractor = document.getElementById("volver");
    const volverTrailla = document.getElementById("volverT");
    const volverCargador = document.getElementById("volverCargador");
    const volverRetroexcavadora = document.getElementById("volverRetroexcavadora");

    const resultadoTractor = document.getElementById("resultado");
    const resultadoTrailla = document.getElementById("resultadoT");
    const resultadoCargador = document.getElementById("resultadoCargador");
    const resultadoRetroexcavadora = document.getElementById("resultadoRetroexcavadora");

    let modeloActual = "";

    /* === MOSTRAR CALCULADORA SEGÚN MODELO === */
    document.querySelectorAll(".item img").forEach(img => {
        img.addEventListener("click", () => {
            const item = img.closest(".item");
            modeloActual = item.querySelector(".Nombres").textContent.trim();
            galeria.style.display = "none";

            detalleTractor.style.display = "none";
            detalleTrailla.style.display = "none";
            detalleCargador.style.display = "none";
            detalleRetroexcavadora.style.display = "none";


            if (modeloActual.toLowerCase().includes("mototrailla")) {
                detalleTrailla.style.display = "flex";
                tituloTrailla.textContent = `Calculadora de Rendimiento - ${modeloActual}`;
                resultadoTrailla.textContent = "";
            } else if (modeloActual.toLowerCase().includes("cargador")) {
                detalleCargador.style.display = "flex";
                tituloCargador.textContent = `Calculadora de Rendimiento - ${modeloActual}`;
                resultadoCargador.textContent = "";
            }else if (modeloActual.toLowerCase().includes("retroexcavadora")) {
                detalleRetroexcavadora.style.display = "flex";
                tituloRetroexcavadora.textContent = `Calculadora de Rendimiento - ${modeloActual}`;
                resultadoRetroexcavadora.textContent = "";
            } else {
                detalleTractor.style.display = "flex";
                tituloTractor.textContent = `Calculadora de Rendimiento - ${modeloActual}`;
                resultadoTractor.textContent = "";
            }
        });
    });

    /* === BOTONES VOLVER === */
    volverTractor.addEventListener("click", () => {
        detalleTractor.style.display = "none";
        galeria.style.display = "flex";
    });

    volverTrailla.addEventListener("click", () => {
        detalleTrailla.style.display = "none";
        galeria.style.display = "flex";
    });

    volverCargador.addEventListener("click", () => {
        detalleCargador.style.display = "none";
        galeria.style.display = "flex";
    });

    volverRetroexcavadora.addEventListener("click", () => {
        detalleRetroexcavadora.style.display = "none";
        galeria.style.display = "flex";
    });

    /* === SELECTORES DE MODO === */
    const modoMaterial = document.getElementById("modoMaterial");
    const modoDensidad = document.getElementById("modoDensidad");
    const divMaterial = document.querySelector("#detalle .modo-material");
    const divDensidad = document.querySelector("#detalle .modo-densidad");

    modoMaterial.addEventListener("change", () => {
        divMaterial.style.display = "flex";
        divDensidad.style.display = "none";
    });

    modoDensidad.addEventListener("change", () => {
        divMaterial.style.display = "none";
        divDensidad.style.display = "flex";
    });

    /* === SELECTOR DE MODO MOTOTRAILLA === */
    const modoMaterialT = document.getElementById("modoMaterialT");
    const modoDensidadT = document.getElementById("modoDensidadT");
    const divMaterialT = document.querySelector("#detalle-mototrailla .modo-material");
    const divDensidadT = document.querySelector("#detalle-mototrailla .modo-densidad");

    modoMaterialT.addEventListener("change", () => {
        divMaterialT.style.display = "flex";
        divDensidadT.style.display = "none";
    });
    modoDensidadT.addEventListener("change", () => {
        divMaterialT.style.display = "none";
        divDensidadT.style.display = "flex";
    });

    /* === SELECTOR DE MODO CARGADOR === */
    const modoMaterialC = document.getElementById("modoMaterialC");
    const modoDensidadC = document.getElementById("modoDensidadC");
    const divMaterialC = document.querySelector("#detalle-cargador .modo-material");
    const divDensidadC = document.querySelector("#detalle-cargador .modo-densidad");

    modoMaterialC.addEventListener("change", () => {
        divMaterialC.style.display = "flex";
        divDensidadC.style.display = "none";
    });
    modoDensidadC.addEventListener("change", () => {
        divMaterialC.style.display = "none";
        divDensidadC.style.display = "flex";
    });

    /* === SELECTOR DE MODO RETROEXCAVADORA === */
    const modoMaterialR = document.getElementById("modoMaterialR");
    const modoDensidadR = document.getElementById("modoDensidadR");
    const divMaterialR = document.querySelector("#detalle-retroexcavadora .modo-material");
    const divDensidadR = document.querySelector("#detalle-retroexcavadora .modo-densidad");

    modoMaterialR.addEventListener("change", () => {
        divMaterialR.style.display = "flex";
        divDensidadR.style.display = "none";
    });
    modoDensidadR.addEventListener("change", () => {
        divMaterialR.style.display = "none";
        divDensidadR.style.display = "flex";
    });

    /* === CÁLCULO TRACTOR === */
    calcularTractor.addEventListener("click", () => {
        resultadoTractor.style.color = "green";
        resultadoTractor.textContent = `✅ Cálculo realizado para ${modeloActual}`;
    });

    /* === CÁLCULO MOTOTRAILLA === */
    calcularTrailla.addEventListener("click", () => {
        resultadoTrailla.style.color = "green";
        resultadoTrailla.textContent = `✅ Cálculo realizado para ${modeloActual}`;
    });

    /* === CÁLCULO CARGADOR === */
    calcularCargador.addEventListener("click", () => {
        resultadoCargador.style.color = "green";
        resultadoCargador.textContent = `✅ Cálculo realizado para ${modeloActual}`;
    });
    
    /* === CÁLCULO RETROEXCAVADORA === */
    calcularRetroexcavadora.addEventListener("click", () => {
        resultadoRetroexcavadora.style.color = "green";
        resultadoRetroexcavadora.textContent = `✅ Cálculo realizado para ${modeloActual}`;
    });



    /* ==== CAMBIO DINÁMICO DE INFO DE HOJA ==== */
    const infoHoja = document.getElementById("infoHoja");
    const hojaRecta = document.getElementById("hojaRecta");
    const hojaAngular = document.getElementById("hojaAngular");

    function actualizarInfoHoja() {
    const anchoUsuarioInput = document.getElementById("anchoUsuario");

        if (hojaRecta.checked) {
            infoHoja.innerHTML = `
                <p><b>Largo:</b> 3.65 m</p>
                <p><b>Alto:</b> 1.27 m</p>
                <p><b>Constante:</b> 1.3 m</p>
            `;
            anchoUsuarioInput.value = 6.03; // valor por defecto hoja recta
        } else if (hojaAngular.checked) {
            infoHoja.innerHTML = `
                <p><b>Largo:</b> 4.29 m</p>
                <p><b>Alto:</b> 0.96 m</p>
                <p><b>Constante:</b> 1.3 m</p>
            `;
            anchoUsuarioInput.value = 5.35; // valor por defecto hoja angular
        }
    }


    hojaRecta.addEventListener("change", actualizarInfoHoja);
    hojaAngular.addEventListener("change", actualizarInfoHoja);
    actualizarInfoHoja(); // inicializar al cargar

    /* ==== CÁLCULO TRACTOR ==== */
    calcular.addEventListener("click", () => {
    const eficacia = parseFloat(document.getElementById("eficacia").value) / 100;
    const distancia = parseFloat(document.getElementById("distancia").value);
    const pendiente = parseFloat(document.getElementById("pendiente").value);
    const vAvance = parseFloat(document.getElementById("marchaAvance").value);
    const vRetorno = parseFloat(document.getElementById("marchaRetorno").value);
    const tiempoManiobra = 0.33;

    let factor = 1;
    let modo = "";

    if (modoMaterial.checked) {
        factor = parseFloat(document.getElementById("material").value);
        modo = "material";
    } else if (modoDensidad.checked) {
        const densBanco = parseFloat(document.getElementById("densBanco").value);
        const densSuelta = parseFloat(document.getElementById("densSuelta").value);
        if ([densBanco, densSuelta].some(isNaN) || densBanco <= 0 || densSuelta <= 0) {
            resultado.style.color = "red";
            resultado.textContent = "Por favor ingresa ambas densidades correctamente.";
            return;
        }
        factor = densBanco / densSuelta;
        modo = "densidad";
    }

    const anchoUsuario = parseFloat(document.getElementById("anchoUsuario").value);
    if (isNaN(anchoUsuario) || anchoUsuario <= 0) {
        resultado.style.color = "red";
        resultado.textContent = "Por favor ingresa un ancho válido.";
        return;
    }

    const anchoN = anchoUsuario; // usa el valor seleccionado por el usuario
    const tAvance = distancia / (vAvance * 1000 / 60);
    const tRetorno = distancia / (vRetorno * 1000 / 60);
    const tiempoTotal = tAvance + tRetorno + tiempoManiobra;

    const Rt = (eficacia * anchoN * 60) / (tiempoTotal * factor) * 100;

    const perdidapend = pendiente > 0 ? pendiente * 3 : 0;
    const aux1 = 1 - perdidapend / 100;

    const perdidaDist = distancia > 30 ? (distancia * 5) / 30 : 0;
    const aux2 = 1 - perdidaDist / 100;

    const anchoC = anchoN * aux1 * aux2;
    const Rc = (eficacia * anchoC * 60) / (tiempoTotal * factor) * 100;

    resultado.style.color = "green";
    resultado.innerHTML = `<b>${modeloActual}</b><br>
        🔹 Modo usado: <b>${modo === "material" ? "Tipo de material" : "Densidades"}</b><br>
        🔹 Rendimiento Teórico: <b>${Rt.toFixed(2)} m³/h</b><br>
        🔹 Rendimiento Corregido: <b>${Rc.toFixed(2)} m³/h</b><br>
        🔹 Pérdida por pendiente: <b>${perdidapend.toFixed(2)}%</b><br>
        🔹 Pérdida por distancia: <b>${perdidaDist.toFixed(2)}%</b><br>
        🔹 Tiempo total de ciclo: <b>${tiempoTotal.toFixed(2)} min</b>`;
    });


    /* ==== CÁLCULO MOTOTRAILLA ==== */
    calcularT.addEventListener("click", () => {
        // Obtener valores del formulario
        const vAvance = parseFloat(document.getElementById("marchaAvanceT").value);
        const vRetorno = parseFloat(document.getElementById("marchaRetornoT").value);
        const vCarga = parseFloat(document.getElementById("velCargaT").value);
        const vDescarga = parseFloat(document.getElementById("velDescargaT").value);
        const distancia = parseFloat(document.getElementById("distanciaT").value);
        const volumenProyecto = parseFloat(document.getElementById("volumenT").value);

        if ([vAvance, vRetorno, vCarga, vDescarga, distancia, volumenProyecto].some(isNaN)) {
            resultadoT.style.color = "red";
            resultadoT.textContent = "Por favor completa todos los campos.";
            return;
        }

        // Determinar capacidad según radio button
        let capacidadEquipo = 0;
        const CapacidadColmada = document.getElementById("CapacidadColmada");
        const CapacidadArras = document.getElementById("CapacidadArras");

        if (CapacidadColmada.checked) {
            capacidadEquipo = 15.3; // colmada
        } else if (CapacidadArras.checked) {
            capacidadEquipo = 10.7; // arras
        } else {
            resultadoT.style.color = "red";
            resultadoT.textContent = "Selecciona la capacidad (colmada o arras).";
            return;
        }

            let factor = 1, modo = "";


        //material
        if (modoMaterialT.checked) {
            factor = parseFloat(document.getElementById("materialT").value);
            modo = "material";
        } else if (modoDensidadT.checked) {
            const densBanco = parseFloat(document.getElementById("densBancoT").value);
            const densSuelta = parseFloat(document.getElementById("densSueltaT").value);
            if ([densBanco,densSuelta].some(isNaN) || densBanco<=0 || densSuelta<=0) {
                resultadoT.style.color="red";
                resultadoT.textContent="Por favor ingresa ambas densidades correctamente.";
                return;
            }
            
            if(CapacidadColmada.checked){
                if(densSuelta>1420){
                    let cargamaxima=21800;
                    let capacidadcorregida=0;
                    capacidadcorregida=cargamaxima/densSuelta;
                }
            }else if(CapacidadArras.checked){
                if(densSuelta>2030){
                    let cargamaxima=21800;
                    let capacidadcorregida=0;
                    capacidadcorregida=cargamaxima/densSuelta;
                }
            }
            factor = densBanco/densSuelta;
            modo = "densidad";
        }
        
        const tManiobra = 0.33;
        const espesorCorte = 0.33;
        const espesorDescarga = 0.52;
        const anchoHoja = 3.02;
        const eficacia = 0.8;

        
        const longitudCorte = capacidadEquipo / (anchoHoja * espesorCorte);
        const longitudDescarga = capacidadEquipo / (anchoHoja * espesorDescarga);

        const tAvance = ((distancia/vAvance)*60)/1000;
        const tRetorno = ((distancia/vRetorno)*60)/1000;
        const tCarga = ((longitudCorte/vCarga)*60)/1000;
        const tDescarga = ((longitudDescarga/vDescarga)*60)/1000;

        const tCiclo = tAvance + tCarga + tDescarga + tRetorno + tManiobra;
        const rendimientoTeorico = (capacidadEquipo*60*eficacia)/(tCiclo*factor);
        const numHoras = volumenProyecto/rendimientoTeorico;

        resultadoT.style.color="green";
        resultadoT.innerHTML = `
            <b>${modeloActual}</b><br>
            🔹 Modo usado: <b>${modo === "material" ? "Tipo de material" : "Densidades"}</b><br>
            🔹 Rendimiento Teórico: <b>${rendimientoTeorico.toFixed(2)} m³/h</b><br>
            🔹 Tiempo Avance: <b>${tAvance.toFixed(2)} min</b><br>
            🔹 Tiempo Carga: <b>${tCarga.toFixed(2)} min</b><br>
            🔹 Tiempo Descarga: <b>${tDescarga.toFixed(2)} min</b><br>
            🔹 Tiempo Retorno: <b>${tRetorno.toFixed(2)} min</b><br>
            🔹 Tiempo Maniobra: <b>${tManiobra.toFixed(2)} min</b><br>
            🔹 Tiempo de Ciclo: <b>${tCiclo.toFixed(2)} min</b><br>
            🔹 Horas necesarias: <b>${numHoras.toFixed(2)} h</b>
        `;
    });
    /* ==== CÁLCULO CARGADOR ==== */
    calcularCargador.addEventListener("click", () => {
        const eficaciaCargador = parseFloat(document.getElementById("eficaciaCargador").value);
        const distanciaCargador = parseFloat(document.getElementById("distanciaCargador").value);
        let anchoUsuarioCargador = parseFloat(document.getElementById("anchoUsuarioCargador").value);
        const materialCargador = parseFloat(document.getElementById("materialCargador").value);
        const vAvanceCargador = parseFloat(document.getElementById("marchaAvanceCargador").value);
        const vRetornoCargador = parseFloat(document.getElementById("marchaRetornoCargador").value);
        const Tfijo = 0.5; // tiempo fijo de maniobras (min)

        const r1 = parseFloat(document.getElementById("RendimientoTractor1").value);
        const r2 = parseFloat(document.getElementById("RendimientoTractor2").value);
        const r3 = parseFloat(document.getElementById("RendimientoTractor3").value);
        const r4 = parseFloat(document.getElementById("RendimientoTractor4").value);

        // Validar que R1 sea obligatorio
        if (isNaN(r1)) {
            resultadoCargador.style.color = "red";
            resultadoCargador.textContent = "Debes ingresar al menos el rendimiento R1.";
            return;
        }

        // Validar campos principales
        if ([eficaciaCargador, distanciaCargador, vAvanceCargador, vRetornoCargador].some(isNaN)) {
            resultadoCargador.style.color = "red";
            resultadoCargador.textContent = "Por favor llena todos los campos numéricos requeridos.";
            return;
        }

        // Calcular rendimiento total de tractores
        const rendimientos = [r1, r2, r3, r4];
        let RendimientoTractores = 0;
        for (const r of rendimientos) {
            if (!isNaN(r)) RendimientoTractores += r;
        }

        // Determinar el factor de conversión (modo Material o Densidad)
        let factorCargador = 1;
        let modo = "";

        if (modoMaterialC.checked) {
            factorCargador = materialCargador;
            modo = "material";
        } 
        else if (modoDensidadC.checked) {
            const densidadBancoCargador = parseFloat(document.getElementById("densidadBancoCargador").value);
            const densidadSueltaCargador = parseFloat(document.getElementById("densidadSueltaCargador").value);

            if ([densidadBancoCargador, densidadSueltaCargador].some(x => isNaN(x) || x <= 0)) {
                resultadoCargador.style.color = "red";
                resultadoCargador.textContent = "Por favor ingresa ambas densidades correctamente.";
                return;
            }
            factorCargador = densidadBancoCargador / densidadSueltaCargador;
            modo = "densidad";
        }

        // Calcular tiempos de avance, retorno y total (en minutos)
        const tAvanceCargador = distanciaCargador / (vAvanceCargador * 1000 / 60);
        const tRetornoCargador = distanciaCargador / (vRetornoCargador * 1000 / 60);
        const tiempoTotalCargador = tAvanceCargador + tRetornoCargador + Tfijo;

        // === PRIMER CÁLCULO DE CAPACIDAD MÍNIMA DEL CUCHARÓN ===
        const CapacidadMinCucharon = (RendimientoTractores * tiempoTotalCargador * factorCargador) / (eficaciaCargador * 60);

        // === SI EL USUARIO NO INGRESA ANCHO O ES CERO, SE USA LA CAPACIDAD MÍNIMA ===
        if (isNaN(anchoUsuarioCargador) || anchoUsuarioCargador <= 0) {
            anchoUsuarioCargador = CapacidadMinCucharon;
        }

        // === RENDIMIENTO DEL CARGADOR ===
        const RendimientoCargador = (eficaciaCargador * anchoUsuarioCargador * 60) / (tiempoTotalCargador * factorCargador);

        // === NÚMERO DE CARGADORES REQUERIDOS ===
        const NumeroCargadores = RendimientoTractores / RendimientoCargador;

        // === MOSTRAR RESULTADOS ===
        resultadoCargador.style.color = "green";
        resultadoCargador.innerHTML = `
            🔹 <b>Eficiencia:</b> ${eficaciaCargador.toFixed(2)}<br>
            🔹 <b>Rendimiento total de tractores:</b> ${RendimientoTractores.toFixed(2)} m³/h<br>
            🔹 <b>Factor (${modo}):</b> ${factorCargador.toFixed(3)}<br>
            🔹 <b>Tiempo total de ciclo:</b> ${tiempoTotalCargador.toFixed(2)} min<br>
            🔹 <b>Ancho usado para cálculo:</b> ${anchoUsuarioCargador.toFixed(2)} m³ (automático si era 0)<br>
            🔹 <b>Rendimiento del cargador:</b> ${RendimientoCargador.toFixed(2)} m³/h<br>
            🔹 <b>Capacidad mínima del cucharón:</b> ${CapacidadMinCucharon.toFixed(2)} m³<br>
            ⚙️ <b>Número de cargadores requeridos:</b> ${NumeroCargadores.toFixed(2)}
        `;
    });

   // === CALCULADORA DE RETROEXCAVADORA ===
    calcularRetroexcavadora.addEventListener("click", () => {
        const eficaciaRetroexcavadora = parseFloat(document.getElementById("eficaciaRetroexcavadora").value);
        const distanciaRetroexcavadora = parseFloat(document.getElementById("distanciaRetroexcavadora").value);
        const capacidadRetroexcavadora = parseFloat(document.getElementById("CapacidadRetroexcavadora").value);
        const materialRetroexcavadora = document.getElementById("materialRetroexcavadora").value;
        const vAvanceRetroexcavadora = parseFloat(document.getElementById("marchaAvanceRetroexcavadora").value);
        const vRetornoRetroexcavadora = parseFloat(document.getElementById("marchaRetornoRetroexcavadora").value);
        const Tfijo = 0.5; // tiempo fijo (min)

        const resultadoRetroexcavadora = document.getElementById("resultadoRetroexcavadora");

        // Validar campos principales
        if ([eficaciaRetroexcavadora, distanciaRetroexcavadora, capacidadRetroexcavadora, vAvanceRetroexcavadora, vRetornoRetroexcavadora].some(isNaN)) {
            resultadoRetroexcavadora.style.color = "red";
            resultadoRetroexcavadora.textContent = "Por favor llena todos los campos numéricos requeridos.";
            return;
        }

        // === FACTOR DE LLENADO SEGÚN MATERIAL ===
        let factorLlenado = 1;
        switch (materialRetroexcavadora) {
            case "1.38": // Marga
                factorLlenado = 1.05;
                break;
            case "1.12": // Arena - Grava
                factorLlenado = 0.95;
                break;
            case "1.5":  // Arcilla Blanda
            case "1.55": // Arcilla Dura
                factorLlenado = 0.80;
                break;
            case "1.63": // Roca Muy Partida
                factorLlenado = 0.70;
                break;
            case "1.75": // Roca Mal Partida
                factorLlenado = 0.45;
                break;
        }

        // === FACTOR RETROEXCAVADORA (material o densidad) ===
        let factorRetroexcavadora = parseFloat(materialRetroexcavadora);
        let modo = "";

        if (modoMaterialR.checked) {
            modo = "material";
        } else if (modoDensidadR.checked) {
            const densidadBancoRetroexcavadora = parseFloat(document.getElementById("densidadBancoRetroexcavadora").value);
            const densidadSueltaRetroexcavadora = parseFloat(document.getElementById("densidadSueltaRetroexcavadora").value);

            if ([densidadBancoRetroexcavadora, densidadSueltaRetroexcavadora].some(x => isNaN(x) || x <= 0)) {
                resultadoRetroexcavadora.style.color = "red";
                resultadoRetroexcavadora.textContent = "Por favor ingresa ambas densidades correctamente.";
                return;
            }
            factorRetroexcavadora = densidadBancoRetroexcavadora / densidadSueltaRetroexcavadora;
            modo = "densidad";
        }

        // === CÁLCULOS DE TIEMPOS (min) ===
        const tAvance = distanciaRetroexcavadora / (vAvanceRetroexcavadora * 1000 / 60);
        const tRetorno = distanciaRetroexcavadora / (vRetornoRetroexcavadora * 1000 / 60);
        const tiempoTotal = tAvance + tRetorno + Tfijo;

        // === RENDIMIENTO ===
        const Rendimiento = (3600 * capacidadRetroexcavadora * eficaciaRetroexcavadora * factorLlenado * 0.764) / (tiempoTotal * factorRetroexcavadora)

        // === MOSTRAR RESULTADOS ===
        resultadoRetroexcavadora.style.color = "green";
        resultadoRetroexcavadora.innerHTML = `
            🔹 <b>Eficiencia:</b> ${eficaciaRetroexcavadora.toFixed(2)}<br>
            🔹 <b>Factor de material (${modo}):</b> ${factorRetroexcavadora.toFixed(3)}<br>
            🔹 <b>Factor de llenado:</b> ${factorLlenado.toFixed(2)}<br>
            🔹 <b>Tiempo total de ciclo:</b> ${tiempoTotal.toFixed(2)} min<br>
            🔹 <b>Rendimiento:</b> ${Rendimiento.toFixed(2)} m³/h
        `;
    });


});