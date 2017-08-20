---
title: Parts Inspection and Sorting System
subtitle: Conveyor Belt, 4 sensors, 2 motors, Microcontroller
linktext: microcontroller-C-project
websiteurl: https://github.com/TT--/projects-portfolio/blob/master/sorting-system.c
websitename: C Code on GitHub
date: 2011-01-02
img: mecha.jpg
thumbnail: mecha-thumb.jpg
alt: Parts inspection and sorting system using AVR microcontroller.
description: >
    Sorting system for four types of object: white or black plastic, aluminum or steel.
    
    
    As it moves down the conveyor, a part is detected in front of a reflective photo-sensor by a separate photo-transistor.  The relative surface reflectivity of the part is measured and used to classify it.  A container rotated by stepper motor is positioned to catch the object as it leaves the conveyor.


    **Implemented** interrupts handling ADC results and inputs from optical and Hall Effect sensors.


    **Linked queue** stores known objects: enqueue when part is classified and dequeue as part leaves the belt.  LEDs display a count of measured and sorted parts.


    **Surmounted** physical constraints of hardware: Increased speed of parts bin rotation (system bottleneck) by dynamically adjusting delay between motor coil energizations.


    **Solved** switch bouncing in software by sampling a bit stream to detect transition edge.
---