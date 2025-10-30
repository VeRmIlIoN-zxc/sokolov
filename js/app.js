         function checkSum() {
            const input = document.getElementById('arrayInput1').value.trim();
            const resultDiv = document.getElementById('sumResult');
            
            try {
                if (!input) throw new Error("Введите элементы массива");
                
                const values = input.split(',').map(x => parseFloat(x.trim()));
                if (values.some(isNaN)) throw new Error("Все элементы должны быть числами");
                
                const sum = values.reduce((a, b) => a + b, 0);
                const isNonNegative = sum >= 0;
                const message = `Сумма: ${sum.toFixed(2)} → ${isNonNegative ? 'неотрицательная' : 'отрицательная'}`;
                
                resultDiv.className = 'result ' + (isNonNegative ? 'success' : 'error');
                resultDiv.textContent = message;
            } catch (e) {
                resultDiv.className = 'result error';
                resultDiv.textContent = `Ошибка: ${e.message}`;
            }
        }


        function checkKthElement() {
            const arrayInput = document.getElementById('arrayInput2').value.trim();
            const kInput = document.getElementById('kInput').value.trim();
            const resultDiv = document.getElementById('kResult');
            
            try {
                if (!arrayInput || !kInput) throw new Error("Заполните оба поля");
                
                const values = arrayInput.split(',').map(x => parseFloat(x.trim()));
                if (values.some(isNaN)) throw new Error("Все элементы должны быть числами");
                
                const k = parseInt(kInput, 10);
                if (isNaN(k)) throw new Error("Индекс должен быть целым числом");
                
                if (k < 0 || k >= values.length) {
                    throw new Error(`Индекс ${k} вне диапазона [0, ${values.length - 1}]`);
                }
                
                const element = values[k];
                const isEven = element % 2 === 0;
                const message = `Элемент[${k}] = ${element} → ${isEven ? 'чётный' : 'нечётный'}`;
                
                resultDiv.className = 'result ' + (isEven ? 'success' : 'error');
                resultDiv.textContent = message;
            } catch (e) {
                resultDiv.className = 'result error';
                resultDiv.textContent = `Ошибка: ${e.message}`;
            }
        }

