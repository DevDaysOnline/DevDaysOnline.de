---
title: Privatsphäre in der Public Cloud – Azure Private Endpoints and Friends
date: 2020-04-18 12:35:00
speakers:
 - rainer-stropek
slug: azure-endpoints-und-friends
description: Wir wissen alle, dass man moderne APIs so schreiben sollte, dass man sie problemlos im öffentlichen betreiben kann. Verschlüsselung, OpenID Connect & Co sorgen für die notwendige Sicherheit.
---
Wir wissen alle, dass man moderne APIs so schreiben sollte, dass man sie problemlos im öffentlichen betreiben kann. Verschlüsselung, OpenID Connect & Co sorgen für die notwendige Sicherheit. In der Praxis ist diese Anforderung aber nicht so einfach zu erfüllen. Code altert und man hat nicht immer die Zeit, jede Zeile auf dem aktuellen Stand der Technik zu halten. Man macht Konfigurations- oder Programmierfehler, die ungewollte Lücken aufreißen. Früher, als Anwendungen noch auf das lokale Netzwerk beschränkt waren, war die Welt in dieser Hinsicht noch ein wenig einfacher. Der Betrieb im lokalen Netz war ein zusätzlicher Schutz, der zwar auch nicht perfekt war, aber trotzdem zusätzliche Sicherheit geboten hat. In der Public Cloud lässt sich diese gute, alte Welt nachbauen, indem man VNets verwendet. Bis vor kurzem waren diese in Azure speziell in Verbindung mit PaaS-Diensten teuer und unhandlich. Durch Azure Private Endpoints und den Azure Private Link Service hat sich das geändert. Rainer stellt in dieser Session beide Dienste vor und erklärt, warum sie VNets in Azure wieder interessant machen.

[Demos und Slides](https://github.com/rstropek/Samples/tree/master/AzurePrivateEndpoints)