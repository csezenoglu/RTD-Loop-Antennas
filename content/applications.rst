************
Applications
************

VLF & LF Antennas
=================

VLF (Very Low Frequency) Band take place from 3kHz to 30 kHz in the frequency spectrum :cite:`ekmekci:2004`.

.. list-table::
	:widths: 1 1
	:header-rows: 1
	
	*	- Advantages
		- Disadvantages
		
	*	- EM waves penetrate well in the sea water
		- High background noise levels
	
	*	- Low atmospheric attenuation
		- Communication needs large amount of power at the output of the transmitter
	
	*	- Appropriate for long range communication
		- 

VLF antennas operate on VLF band. They are electrically small and this simplifies analysis. They are physically large structures. In other words, they generally have a number of towers that 200-300 m high and cover areas of up to a square kilometer or more. The VLF antennas support worldwide communication :cite:`ekmekci:2004`.

The VLF antennas have some problems that listed below :cite:`ekmekci:2004`:

- Bandwidth is less than 200 Hz.
- Small radiation resistance.
- They are expensive structures.
- Antenna system covers a large area.
- Designing an efficient transmitting antenna is difficult.
- High power levels are needed for transmission.

Marris produced a ferrite core loopstick antenna for receiving application as shown in :numref:`loopstick-ultima`. He said VLF antenna but operating frequency band is 50 kHz to 195 kHz, so it was a LF antenna. MMG F14 grade nickel-zinc material was used. The antenna compared with a traditional 20 x 1.25 cm diameter loopstick and he noted that increased signal strength and reduced noise :cite:`marris:1998ultima`. 

.. figure:: ../img/loopstick-ultima.png
	:align: center
	:scale: 100 %
	:name: loopstick-ultima

	: Loopstick antenna.

Underwater Loop Reception
=========================

.. rst-class:: written

In the first world war, some submarines were equipped with radio signal receivers called "French" coils. An American submarine underwater at Long Island Sound received long-wave signals from Nauen, Germany in 1919 :cite:`toth:1950`.

.. rst-class:: written

Toth and Fratianni investigated underwater loop reception and concluded that these results: a) Long-distance underwater radio receivers should be used in the range of 15-30 kHz and about maximum of 6 m (20 ft). b) A convenient underwater receiver system should be omnidirectional and at a certain distance from the water surface :cite:`toth:1950`.

.. rst-class:: written

Induced voltage at the terminals of the antenna in the air is a function of the time of the frontwave that comes to the opposite edge of the coil that parallel to the electric vector. A similar induced voltage occurs at a loop antenna under water. However, since the wavelength of underwater wave propagation is much slower (1000 times slower than air) and the attenuation is too high, the phase differences of the induced voltages at the coil edges are high as shown in :numref:`induced-voltage-underwater` :cite:`toth:1950`.

.. figure:: ../img/induced-voltage-underwater.png
        :align: center
        :scale: 100 %
        :name: induced-voltage-underwater

        : Induced voltages in air and underwater loops.

.. rst-class:: written

The operation of the loop antenna under water significantly increases the efficiency of receiving. For example, in a 20 kHz system, the output voltage increased by 1650 times or 64 dB. However, there are losses in the field strenght of about 66 dB. The loss of the output voltage is only about 2 dB in the transmissions from above the water surface to just below the water surface. :numref:`attenuation-of-underwater` shows the amount of loss per foot under water :cite:`toth:1950`.

.. figure:: ../img/attenuation-of-underwater.png
        :align: center
        :scale: 100 %
        :name: attenuation-of-underwater

        : Computed attenuation of underwater radio field per foot of submergence.

