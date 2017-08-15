---
title: Parts Inspection and Sorting System
subtitle: Atmel AVR-controlled conveyor belt
websiteurl: https://github.com/TT--/projects-portfolio/blob/master/sorting-system.c
websitename: C Code on GitHub
date: 2011-01-02
img: mecha.jpg
thumbnail: mecha-thumb.jpg
alt: Magnetic modelling of inductively coupled coils for wireless power
description: >
    The position of an object is detected by phototransistor as it moves down a conveyor. The relative surface reflectivity is measured for 4 object types.  A container rotated by stepper motor is positioned to catch the object as it leaves the conveyor.


    **Implemented** interrupts to handle ADC results and monitor inputs from optical and Hall Effect sensors.


    **Adapted** design to address hardware physical characteristics: Increased speed of parts bin rotation (system bottleneck) by dynamically adjusting motor coil energization delays.


    **Solved** switch bouncing using an integer variable as a shift register.
---