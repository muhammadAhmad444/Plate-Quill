import random
import smtplib
from email.message import EmailMessage


def email_otp(subject, body, to):
    msg = EmailMessage()
    msg.set_content(body)
    msg['subject'] = subject
    msg['to'] = to

    user = '45335@gcslahore.edu.pk'
    password = 'twuhfstivktvvzyb'

    server = smtplib.SMTP("smtp.gcslahore.edu.pk", 587)
    server.starttls()
    server.login(user , password)
    server.send_message(msg)
    server.quit()

email_otp('message from cook book', f"Your opt is {990}", 'moeezz719@gmail.com')

