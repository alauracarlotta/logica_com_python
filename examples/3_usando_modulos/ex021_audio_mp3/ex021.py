# Faça um programa em Python que abra e reproduza o audio de um arquivo mp3

""" import pygame

pygame.mixer.init()
pygame.init()
pygame.mixer.music.load('theHeartFromYourHate.mp3')
pygame.mixer_music.play()
pygame.event.wait() """


# ------------------------------------------

""" import os

os.system('mpg321 theHeartFromYourHate.mp3 &') """

# ------------------------------------------

""" from playsound import playsound

playsound('theHeartFromYourHate.mp3') """

# ------------------------------------------

""" from pydub import AudioSegment

from pydub.playback import play

song = AudioSegment.from_mp3("theHeartFromYourHate.mp3")
play(song) """

# ------------------------------------------

import pygame

pygame.mixer.init()
pygame.mixer.music.load('trivium.wav')
pygame.mixer_music.play()
pygame.event.wait()
