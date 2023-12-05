# Station Management

The Gas Station Management System is developed for a smooth operation of a gas station and 
ensuring efficient customer service.

### **Key Highlights**

- Booking
- Station Management
- Fleet Management
- Booking List

### **Booking**
Our booking model for station management is  designed for various station services.
<br><br>
<img src="img/booking_tree.png" alt="Booking Tree View" style="width: auto;"/>
<img src="img/booking_form.png" alt="Booking Form View" style="width: auto;"/>

### **Station Management**

Our station management model offers a centralized solution for overseeing all station functions, 
including employee station assignments and lane management.<br>Go to **Confiugration>>Station** menu<br><br>

<img src="img/station_tree.png" alt="Station Tree View" style="width: auto;"/>
<br><br>
<img src="img/station_form.png" alt="Station Form View" style="width: auto;"/>
<br> In our station lane model, we have incorporated features to efficiently manage station operations, 
including both the fueling lane and gas pump facilities
<img src="img/lane_tree.png" alt="Booking Lane Tree View" style="width: auto;"/>
<img src="img/lane_form.png" alt="Booking Lane Form View" style="width: auto;"/>

### **Fleet Management**

In the Fleet model, you can initiate all vehicle processes, select drivers, and 
provide comprehensive details about the engine.
<br><br>For more details **Configuration >> Car** menu, <br><br>
<img src="img/kanban_car.png" alt="Car Kanban View" style="width: auto;"/>
<img src="img/car_form.png" alt="Car Form View" style="width: auto;"/>

### **Booking Real Time**
This menu is designed for regular search, booking, real time change state notificatin and deletion of bookings using the Odoo client action implemented in Owl JS.<br><br>
<img src="img/booking_list.png" alt="Booking List" style="width: auto;"/><br><br>
When you change the booking state to 'Arrived', it will trigger a real-time notification on the client side in Odoo.
<img src="img/booking_noti.png" alt="Booking List" style="width: auto;"/>