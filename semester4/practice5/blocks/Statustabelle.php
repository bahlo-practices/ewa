<?php	// UTF-8 marker äöüÄÖÜß€
/**
 * Class BlockTemplate for the exercises of the EWA lecture
 * Demonstrates use of PHP including class and OO.
 * Implements Zend coding standards.
 * Generate documentation with Doxygen or phpdoc
 *
 * PHP Version 5
 *
 * @category File
 * @package  Pizzaservice
 * @author   Bernhard Kreling, <b.kreling@fbi.h-da.de>
 * @author   Ralf Hahn, <ralf.hahn@h-da.de>
 * @license  http://www.h-da.de  none
 * @Release  1.2
 * @link     http://www.fbi.h-da.de
 */

/**
 * This is a template for classes, which represent div-blocks
 * within a web page. Instances of these classes are used as members
 * of top level classes.
 * The order of methods might correspond to the order of thinking
 * during implementation.

 * @author   Bernhard Kreling, <b.kreling@fbi.h-da.de>
 * @author   Ralf Hahn, <ralf.hahn@h-da.de>
*/

class Statustabelle
{
    // --- ATTRIBUTES ---

    /**
     * Reference to the MySQLi-Database that is
     * accessed by all operations of the class.
     */
    protected $_database = null;

    // to do: declare reference variables for members
    // representing substructures/blocks

    // --- OPERATIONS ---

    /**
     * Gets the reference to the DB from the calling page template.
     * Stores the connection in member $_database.
     *
     * @param $database $database is the reference to the DB to be used
     *
     * @return none
     */
    public function __construct($database)
    {
        $this->_database = $database;
        // to do: instantiate members representing substructures/blocks
    }

    /**
     * Fetch all data that is necessary for later output.
     * Data is stored in an easily accessible way e.g. as associative array.
     *
     * @return none
     */
    protected function getViewData()
    {
        // to do: fetch data for this view from the database
    }

    /**
     * Generates an HTML block embraced by a div-tag with the submitted id.
     * If the block contains other blocks, delegate the generation of their
	 * parts of the view to them.
     *
     * @param  string  $id The unique (!!) id to be used as id in the div-tag
     * @param  string  $url
     * @param  array   $columns
     * @param  array   $data
     * @param  boolean $editable
     *
     * @return none
     */
    public function generateView($id = "", $url, array $columns, array $data,
                                 $editable = false)
    {
        $this->getViewData();
        if ($id) {
            $id = "id=\"$id\"";
        }
        echo "<div $id>\n";
        echo <<<EOF
      <form action="{$url}" method="POST">
        <table>
          <thead>
            <tr>
              <th></th>
EOF;
        foreach ($columns as $column) {
          echo "<th>$column</th>";
        }
        echo <<<EOF
            </tr>
          </thead>
          <tbody>
EOF;

        $disabled = $editable === false ? ' disabled' : '';
        foreach ($data as $i => $row) {
          echo <<<EOF
              <tr>
                <td>{$row['name']}</td>
EOF;

          $checked = array_map(function($value) {
            return $value ? ' checked' : '';
          }, $row['values']);
          foreach ($row['values'] as $j => $field) {
            echo <<<EOF
                  <td>
                    <input type="radio" name="bestellid{$i}" class="submit-form" value="{$field}"{$checked[$j]}{$disabled}></td>
EOF;
          }

          echo '</tr>';
        }
        echo <<<EOF
          </tbody>
        </table>
      </form>
EOF;
        echo "</div>\n";
    }

    /**
     * Processes the data that comes via GET or POST i.e. CGI.
     * If this block is supposed to do something with submitted
     * data do it here.
     * If the block contains other blocks, delegate processing of the
	 * respective subsets of data to them.
     *
     * @return none
     */
    public function processReceivedData()
    {
        // to do: call processData() for all members
    }
}
// Zend standard does not like closing php-tag!
// PHP doesn't require the closing tag (it is assumed when the file ends).
// Not specifying the closing ? >  helps to prevent accidents
// like additional whitespace which will cause session
// initialization to fail ("headers already sent").
//? >
