#Automatizacao para o album
import pyautogui as pyG
import time
import keyboard

inicio = int(input("Inicil: "))
fim = int(input("Fim: "))


esc = int(input("""
  | [1] Salvar as imagens  |
  | [2] Printar o codigo   |
  |                        |
  
    ---> """))
cont = 0
esquoudir = ""
if esc == 1:
    
    pyG.PAUSE = 3
    time.sleep(2)
    pyG.hotkey("alt","tab")
    for num in range(inicio,fim+1):
       
        pyG.moveTo(1888,50)
        pyG.click()
        pyG.press('up')
        pyG.press('up')
        pyG.press('enter')
        pyG.press('backspace')
        pyG.write(f"foto {num}")
        pyG.press('enter')
        pyG.moveTo(1888, 557)
        pyG.click()
    
    print("fim")
elif esc == 2:
    for num in range(inicio, fim+1):
        if num%2 == 0:
            if num%4 == 0:
                esquoudir = '<div class="carta_e">'
            else:
                esquoudir = '<div class="carta_d">'
                
            print (f"""
                {esquoudir}
                <div class="item esquerda">
                    <img src="imagens/album/foto {num}.jpg" alt="Imagem {num}" class="foto">
                    <div class="texto"><h2>---------...-----------</h2></div>
                </div>
            </div>""")
        else:
            print(f"""
                <div class="item direita">
                    <div class="texto">
                        <h2>--------------.....-------------</h2>
                    </div>
                    <img src="imagens/album/foto {num}.jpg" alt="Imagem {num}" class="foto">
                </div>""")
            
            
else:
    print("digite um valor valido")