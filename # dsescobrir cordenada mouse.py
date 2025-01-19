import keyboard
import pyautogui as pyG
def pressTecla(evento):
    if evento.name == 'f3':
        x,y = pyG.position()
        print(x , y)

# Registrar a função para ser chamada quando a tecla "f3" for pressionada
keyboard.on_press_key('f3', pressTecla)

# Manter o script em execução
keyboard.wait('esc')  # O script será encerrado quando a tecla 'esc' for pressionada
